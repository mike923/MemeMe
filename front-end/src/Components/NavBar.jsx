import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
             
            <Link to="/post"
            > post  </Link>
            <br />
            <Link to="/feed"> <i class="large material-icons"
            >explore</i> </Link>
            <br />
            <Link to="/photocomp">photo</Link>
            <br />
            <Link to="/photos/upload"><i class="large material-icons"
            >add_a_photo</i></Link>
            <br />
            <Link to="/user"><i class="large material-icons"
            > face </i></Link>
            <br />
            <Link to="/EditProfile"> <i class="large material-icons"
            >edit</i></Link>
            <br/>
            <Link to="/LogOut"> <i class="large material-icons"
            >exit_to_app</i></Link>
        </nav>
    );
};

export default NavBar;
