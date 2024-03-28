// import React from "react";
// import {Link} from "react-router-dom";
// function Navbar(){
//     return(
// <>
// <nav className="navbar">
//     <li className="logo">Medicare</li>
// <ul className="nav">
//     <li className="nav-item"><Link to="/">Home</Link></li>
//     <li className="nav-item"><Link to="/about">About</Link></li>
//     <li className="nav-item"><Link to="/contact">Contact</Link></li>
//     <li className="nav-item"><a href="#">Departement</a></li>
//     <li className="nav-item"><a href="">Service</a></li>
// </ul>
// </nav>
// </>
//     );
// };
// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <li className="logo">Medicare</li>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/departments">Departments</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
