import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";
import AboutMe from "./components/AboutMe";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
  return (
    <div className="h-dvh grid grid-rows-[5rem_1fr_5rem]">
      <Navbar>
        <Title>Vitaly Sinitsin</Title>
        <Navmenu>
          <Button buttonStyle="plain">ABOUT ME</Button>
          <Button buttonStyle="plain">PROJECTS</Button>
        </Navmenu>
      </Navbar>
      <main>
        <div className="fixed h-full w-2/5 bg-[#E7DBCF] z-[-10]"></div>
        <AboutMe></AboutMe>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
