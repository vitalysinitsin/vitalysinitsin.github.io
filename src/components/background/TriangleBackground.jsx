import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

const TRIANGLE_1 = "#A5998D";
const TRIANGLE_2 = "#8A8278";
const TRIANGLE_3 = "#5E5850";

const FRUSTUM_HEIGHT = 5;

const HORIZONTAL_BLEED = 0.2;
const HALF_HEIGHT = FRUSTUM_HEIGHT / 2;
// Distance along top/left edge from the top-left corner (0–1 of half span)
const CORNER_LEG = 0.98;
// Nudge all corners slightly toward screen center (0 = at edges, ~0.15 = subtle)
const CENTER_INSET = 0.2;

function towardCenter([x, y, z], inset) {
  const t = 1 - inset;
  return [x * t, y * t, z];
}

function OrthoBounds() {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  useLayoutEffect(() => {
    if (!camera.isOrthographicCamera) return;

    const aspect = size.width / size.height;
    const halfWidth = (FRUSTUM_HEIGHT * aspect) / 2;

    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.top = FRUSTUM_HEIGHT / 2;
    camera.bottom = -FRUSTUM_HEIGHT / 2;
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);

  return null;
}

const SWING_AMPLITUDE = 0.035; // radians (~2°) — subtle back-and-forth

function TriangleMesh({
  vertices,
  color,
  opacity = 1,
  animate = false,
  initialRotation = 0,
  swingSpeed = 0.15,
  swingAmplitude = SWING_AMPLITUDE,
  swingDirection = 1,
}) {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(vertices.flat());
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [vertices]);

  useFrame((state) => {
    if (!animate || !meshRef.current) return;
    meshRef.current.rotation.z =
      initialRotation +
      swingDirection *
        Math.sin(state.clock.elapsedTime * swingSpeed) *
        swingAmplitude;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[0, 0, initialRotation]}>
      <meshBasicMaterial
        color={color}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </mesh>
  );
}

function useFrustumBounds() {
  const size = useThree((state) => state.size);
  const aspect = size.width / size.height;
  return {
    halfWidth: (FRUSTUM_HEIGHT * aspect) / 2,
    halfHeight: HALF_HEIGHT,
  };
}

/** Apex at bottom-right; two corners flank top-left on the top and left edges. */
function buildAngledTriangle(halfWidth, halfHeight, scale = 1) {
  const w = (halfWidth + HORIZONTAL_BLEED) * scale;
  const h = halfHeight * scale;
  const leg = CORNER_LEG;

  const cornerAlongTop = towardCenter([-w + w * leg, h, 0], CENTER_INSET);
  const cornerAlongLeft = towardCenter([-w, h - h * leg, 0], CENTER_INSET);
  const apex = towardCenter([w, -h, 0], CENTER_INSET);

  return [cornerAlongTop, cornerAlongLeft, apex];
}

function SpanningTriangles() {
  const { halfWidth, halfHeight } = useFrustumBounds();

  const primaryVertices = useMemo(
    () => buildAngledTriangle(halfWidth, halfHeight),
    [halfWidth, halfHeight],
  );

  const secondaryVertices = useMemo(
    () => buildAngledTriangle(halfWidth, halfHeight, 1.6),
    [halfWidth, halfHeight],
  );

  const tertiaryVertices = useMemo(
    () => buildAngledTriangle(halfWidth, halfHeight),
    [halfWidth, halfHeight],
  );

  return (
    <>
      <TriangleMesh
        vertices={primaryVertices}
        color={TRIANGLE_1}
        animate
        initialRotation={-2.25}
        swingSpeed={0.32}
        swingDirection={1}
      />
      <TriangleMesh
        vertices={secondaryVertices}
        color={TRIANGLE_2}
        opacity={0.1}
        animate
        initialRotation={3.55}
        swingSpeed={0.26}
        swingAmplitude={0.04}
        swingDirection={-1}
      />
      <TriangleMesh
        vertices={tertiaryVertices}
        color={TRIANGLE_3}
        animate
        initialRotation={0}
        swingSpeed={0.38}
        swingAmplitude={0.03}
        swingDirection={1}
      />
    </>
  );
}

function Scene() {
  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        near={0.1}
        far={100}
      />
      <OrthoBounds />
      <SpanningTriangles />
    </>
  );
}

function TriangleBackground() {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none" aria-hidden>
      <Canvas
        className="absolute inset-0"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default TriangleBackground;
