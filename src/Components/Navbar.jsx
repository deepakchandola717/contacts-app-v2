import React, { Component } from "react";
import AddContact from './AddContact'

class Navbar extends Component {
  state = {
    search:'',
  };

  // handleSearch=(event)=>{
  //   this.setState({
  //     search:event.target.value
  //   })
  //   this.props.onSearch(this.state.search)
  //   console.log("updating in navbar.jsx", this.state.search)
  // }

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">ContactsApp</a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // value= {this.state.search}
              onChange={(event) => this.props.onSearch(event.target.value)}
              // onChange={this.handleSearch}
            />
            <div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-target="#add-new-form" aria-haspopup="true" aria-expanded="false">
    ADD New Contact
  </button>
  <AddContact onAdd={this.props.onAdd}/>
</div>
  
            
          </form>
        </nav>
      </>
    );
  }
}

export default Navbar;
