import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-secondary bg-light">
          <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1 text-center">Employee Directory</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
