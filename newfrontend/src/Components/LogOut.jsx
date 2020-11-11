import React from "react";
import { Redirect } from "react-router-dom";

const LogOut = ({ changeID }) => {
  changeID(0);
  return <Redirect to="/login" />;
  // this logs you out and brings you back to /login. 
};

export default LogOut;
