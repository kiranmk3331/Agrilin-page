import MainSectionContainer from "./components/BodyContainer/MainSectionContainer";
import SidebarContainer from "./components/BodyContainer/SidebarContainer";
import NavContainer from "./components/NavContainer";

function App() {
  return (
    <div className="App bg-[#FCFCFC99] h-full w-full">
      <NavContainer />
      <div className="grid grid-cols-5">
        <div className="col-span-1">
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
