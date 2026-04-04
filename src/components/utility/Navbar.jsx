import { NavLink } from "react-router-dom";
import Title from "./Title";

function Navbar() {
  return (
    <header className="flex bg-white justify-between items-center overflow-hidden shadow-sm px-2">
      <Title />
      <nav className="shrink-0 items-center gap-1 hidden md:flex">
        <NavLink to="/" end className="">
          About me
        </NavLink>
        <NavLink to="/portfolio" className="">
          Portfolio
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
