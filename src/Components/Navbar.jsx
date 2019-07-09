import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">Contacts</a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="">
              ADD NEW
            </button>
          </form>
        </nav>
      </>
    );
  }
}

export default Navbar;
