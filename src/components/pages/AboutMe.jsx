import myPhoto from "../../assets/me.jpg";
import Button from "../utility/Button";
import vitalySinitsinResumeSoftwareDev from "../../assets/vitalySinitsinResumeSoftwareDev.pdf";

function AboutMe() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] auto-rows-max mx-auto max-w-2xl w-full h-max shadow-lg overflow-hidden">
      <div className="bg-[#F4ECE6] flex flex-col p-4 gap-4">
        <img
          className="mx-auto h-40 w-40 rounded-full"
          src={myPhoto}
          alt="myPhoto"
        />
        <div className="flex items-center flex-col">
          <span className="text-center text-2xl font-extrabold">Vitaly</span>
          <span className="text-center text-2xl font-extrabold">Sinitsin</span>
        </div>
        <div className="h-0.5 w-14 bg-blue-500 flex self-center"></div>
        <span className="text-center text-sm">SOFTWARE DEVELOPER</span>
      </div>
      <div className="flex items-start flex-col gap-8 p-4 bg-white">
        <span className="text-7xl font-extrabold">Hello!</span>
        <span className="text-lg">Here's who I am & what I do</span>
        <div className="flex gap-4">
          <Button>
            <a
              href={vitalySinitsinResumeSoftwareDev}
              download="vitalySinitsinResumeSoftwareDev.pdf"
            >
              RESUME
            </a>
          </Button>
          <Button buttonStyle="outline">
            <a href="https://www.github.com/hungryvito">GITHUB</a>
          </Button>
        </div>
        <p>
          I'm a software developer dedicated to creating effective and impactful
          software solutions. My experience includes launching several web
          applications in the environmental sector and developing a public
          safety platform that has aided police officers globally.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
