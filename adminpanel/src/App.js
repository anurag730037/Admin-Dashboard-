import "./App.css";
import Home from "./Components/Home/Home";
import SideBar from "./Components/sidebar/SideBar";
import TopBar from "./Components/topbar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </>
  );
}

export default App;
