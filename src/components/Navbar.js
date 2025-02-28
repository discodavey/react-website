import React from 'react'
import logo from '../assets/images/impulse-logo-1.svg';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <div className="left-column">
        <img src={logo} alt="Impulse Radio" />
      </div>
      <div className="right-column">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar