import { ButtonRouterLink } from "./Button";
import Title from "./Title";

function Navbar() {
  return (
    <header className="flex bg-white justify-around overflow-hidden shadow-sm">
      <Title />
      <ul className="flex">
        <ButtonRouterLink to="/dev" buttonStyle="plain">
          ABOUT ME
        </ButtonRouterLink>
        <ButtonRouterLink to="/dev/projects" buttonStyle="plain">
          PROJECTS
        </ButtonRouterLink>
      </ul>
    </header>
  );
}

export default Navbar;
