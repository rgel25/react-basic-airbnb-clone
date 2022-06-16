import React from "react";
import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={logo} alt="airbnb-logo" className="nav-logo"></img>
      </div>
    </nav>
  );
}
