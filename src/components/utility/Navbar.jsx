import { ButtonLink } from "./Button";
import Title from "./Title";

function Navbar() {
  return (
    <header className="flex bg-white justify-around overflow-hidden">
      <Title />
      <ul className="flex">
        <ButtonLink to="/dev" buttonStyle="plain">
          ABOUT ME
        </ButtonLink>
        <ButtonLink to="/dev/projects" buttonStyle="plain">
          PROJECTS
        </ButtonLink>
      </ul>
    </header>
  );
}

export default Navbar;
