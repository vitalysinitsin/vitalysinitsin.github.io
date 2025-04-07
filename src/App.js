import Navbar from "./components/utility/Navbar";
import CanadianFlag from "./assets/CanadianFlag.svg";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <div className="grid grid-rows-[5rem_1fr_2rem] h-screen overflow-hidden">
      <Navbar />
      <div className="absolute h-full w-2/5 bg-[#E7DBCF] -z-20"></div>
      <AboutMe />
      <footer className="bg-white flex justify-end p-1 w-full flex-wrap gap-x-2 border-t text-sm font-bold">
        <div className="flex items-center">
          <span>vsinitsin94@gmail.com</span>
        </div>
        <div className="flex items-center">
          <span>Calgary, Alberta</span>
          <img className="pl-1 h-4" src={CanadianFlag} alt="CanadianFlag" />
        </div>
      </footer>
    </div>
  );
}

export default App;
