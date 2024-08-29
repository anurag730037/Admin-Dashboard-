import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import SideBar from "./Components/sidebar/SideBar";
import TopBar from "./Components/topbar/TopBar";
import Userlist from "./Components/UserList/Userlist";
import Userpage from "./Components/UserPage/Userpage";
import NewUser from "./Components/New User/NewUser";
import Products from "./Components/Products/Products";
import NewProduct from "./Components/Products/NewProduct";
import ProdDetails from "./Components/Products/ProdDetails";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <div className="container">
          <SideBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/users/:userid" element={<Userpage />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:prodid" element={<ProdDetails />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
