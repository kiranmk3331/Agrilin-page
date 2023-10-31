import MainSectionContainer from "./components/BodyContainer/MainSectionContainer";
import SidebarContainer from "./components/BodyContainer/SidebarContainer";
import NavContainer from "./components/NavContainer";
import BackgroundImage from "./assets/background-image.png";

function App() {
  return (
    <div
      className="App h-[100%] w-full"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <NavContainer />
      <div className="grid grid-cols-4 md:grid-cols-5">
        <div className="hidden md:block col-span-1 ">
          <SidebarContainer />
        </div>
        <div className="col-span-4">
          <MainSectionContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
