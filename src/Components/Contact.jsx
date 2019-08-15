import React, { Component } from "react";
import '../CSS/contact.css'

class Contact extends Component {
  state = {
      contact:{
          id:this.props.contact.id,
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
          <div className="avatar" ><img src={this.props.contact.avatar_url} alt="AVATAR"/> </div>
          <div className="details">
            <div className="name">
              <div className="first-name">{this.props.contact.first_name} </div>
              <div className="last-name">{this.props.contact.last_name} </div>
            </div>
            <div className="email" > {this.props.contact.email}</div>
            <div className="phone" > {this.props.contact.phone}</div>
          </div>
          <div className="actions">
            <div className="edit">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-dismiss="modal" data-target="#anything" onClick={()=>this.props.currentStateFunction(this.props.contact)} >
               Edit     
            </button>
            </div>
            <div className="delete">
              <button className="btn btn-danger" onClick={()=>this.props.onDelete(this.state.contact.id)}>Delete</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
