import Navbar from "./components/utility/Navbar";
import CanadianFlag from "./assets/CanadianFlag.svg";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <div className="grid grid-rows-[5rem_1fr_2rem] min-h-full gap-4">
      <Navbar />
      <div className="absolute h-full w-2/5 bg-[#E7DBCF] -z-20"></div>
      <AboutMe />
      <footer className="bg-white flex justify-end h-max p-1 w-full flex-wrap gap-x-2 gap-y-0 col-span-full border-t mt-4 absolute bottom-0 text-sm font-bold">
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
