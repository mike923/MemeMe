import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav className="NavBar">
            
            {/* <img src = 'https://toppng.com/uploads/preview/trollface-transparent-troll-face-11563021387zkvgkht8a9.png' width= '50px' /> 
          */}
            {/* <Link to="/post"
            > post  </Link> */}
            <br />
            <Link to="/feed"> <i className="large material-icons"
            >explore</i> </Link>
            <br />
            {/* <Link to="/photos/upload"><i class="large material-icons"
            >add_a_photo</i></Link> */}
            <br />
            <Link to="/user"><i class="large material-icons"
            > face </i></Link>
            <br />
            {/* <Link to="/EditProfile"> <i class="large material-icons"
            >edit</i></Link> */}
            <br/>
            <Link to="/LogOut"> <i class="large material-icons"
            >exit_to_app</i></Link>
            
        </nav>
        <br/>
        <br/>
        
        </>
    );
};

export default NavBar;
