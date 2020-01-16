import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <nav className="NavBar">
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
  }
  return (
    <nav className="NavBar">
    </nav>
  );
};

export default NavBar;
