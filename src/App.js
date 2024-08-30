import Navbar from "./components/utility/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="grid grid-rows-[5rem_1fr_5rem] min-h-full">
      <Navbar />
      <div className="absolute h-full w-2/5 bg-[#E7DBCF] z-[-10]"></div>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;
