import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="navbarContainer">
            <div className="title">
                <h1>Ekart</h1>
            </div>
            <div className="menus">
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Contact">Users</Link>
                <Link to="/Signup">Register</Link>
                <Link to="/Signin">Sign In</Link>
            </div>
        </div>
    );
}

export default Nav;