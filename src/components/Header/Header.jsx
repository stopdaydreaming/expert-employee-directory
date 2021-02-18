import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-center">
            <span className="navbar-brand mb-0 h1 text-center">
              Employee Directory
            </span>
          </div>
          <div className="container-fluid justify-content-center">
            <p className="text-light">
              Click on the <strong>Name</strong> category to sort by heading and
              use the <strong>Search</strong> box to narrow your results.
            </p>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
