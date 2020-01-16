import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/post">post</Link>
            <br />
            <Link to="/feed">feed</Link>
            <br />
            <Link to="/photocomp">photo</Link>
            <br />
            <Link to="/photos/upload">upload</Link>
            <br />
            <Link to="/user">user</Link>
            <br />
            <Link to="/EditProfile"> EditProfile</Link>
            <br/>
            <Link to="/LogOut"> Log Out</Link>
        </nav>
    );
};

export default NavBar;
