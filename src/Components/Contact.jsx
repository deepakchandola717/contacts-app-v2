import React, { Component } from "react";
import '../CSS/contact.css'

class Contact extends Component {
  state = {
      contact:{
          avatar_url:this.props.contact.avatar_url,
          first_name:this.props.contact.first_name,
          last_name:this.props.contact.last_name,
          email:this.props.contact.email,
          phone:this.props.contact.phone,

      }
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="avatar" ><img src={this.state.contact.avatar_url} alt="AVATAR"/> </div>
          <div className="details">
            <div className="name">
              <div className="first-name">{this.state.contact.first_name} </div>
              <div className="last-name">{this.state.contact.last_name} </div>
            </div>
            <div className="email" > {this.state.contact.email}</div>
            <div className="phone" > {this.state.contact.phone}</div>
          </div>
          <div className="actions">
            <div className="edit">
              <button>Edit</button>
            </div>
            <div className="delete">
              <button >Delete</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
