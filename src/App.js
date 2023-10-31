import SidebarContainer from "./components/BodyContainer/SidebarContainer";
import NavContainer from "./components/NavContainer";

function App() {
  return (
    <div className="App bg-[#FCFCFC99] h-full w-full">
      <NavContainer />
      <div className="grid grid-cols-5">
        <div className="w-30% col-span-1">
          <SidebarContainer />
        </div>
        <div className="w-70%"></div>
      </div>
    </div>
  );
}

export default App;
