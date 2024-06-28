import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import Users from "./Users/Users";
import { Route , Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import PageNotFound from "./components/Page Not Found/PageNotFound";
import ProductDetails from "./components/Products/ProductDetails";
// import Product from "./components/Products/Product";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <div onLoad={Home}>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Product" element={<Products/>}/>
      <Route path="/Contact" element={<Users/>} />
      <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
