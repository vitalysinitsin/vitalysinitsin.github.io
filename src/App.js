import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";
import Main from "./components/Main";
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
      <Main></Main>
      <footer></footer>
    </div>
  );
}

export default App;
