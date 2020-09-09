import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/car-vector.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Warbler Home" />
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/home">Home</Link>
            </li>
            {/* <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li> */}
        </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;