import { NavLink } from "react-router-dom";
import Title from "./Title";

const navLinkClass =
  "flex h-full items-center text-nowrap px-4 text-lg font-bold cursor-pointer hover:bg-gray-100 hover:box-shadow-md transition-all duration-300";

function Navbar() {
  return (
    <header className="flex h-full min-h-0 items-center justify-between overflow-hidden bg-white shadow-sm">
      <Title />
      {/* <nav className="hidden h-full shrink-0 items-stretch text-lg font-bold md:flex">
        <NavLink to="/" end className={navLinkClass}>
          About me
        </NavLink>
        <NavLink to="/portfolio" className={navLinkClass}>
          Portfolio
        </NavLink>
      </nav> */}
    </header>
  );
}

export default Navbar;
