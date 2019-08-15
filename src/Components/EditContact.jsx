import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/edit-contact.css'

class EditContact extends React.Component {
    render() { 
    //   console.log("from props", this.props.contact.phone)
        // const {first_name, last_name, email, phone, id, avatar_url}=this.props.contact
        return (
            <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="anything" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Contact</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form id="edit-form">
                  <div className="holder">
                    <div>
                    <label>FirstName</label>
                    </div>
                    <div>
                    <input type="text" name="first_name" className="form-group col-lg-10 mx-5" defaultValue={this.props.contact.first_name} onChange={(event)=>this.props.onChangeEdit(event)}></input>
                    </div>
                    </div>
                    <div className="holder">
                    <div>
                    <label>LastName</label>
                    </div>
                    <div>
                    <input type="text" name="last_name" className="form-group col-lg-10 mx-5" defaultValue={this.props.contact.last_name} onChange={(event)=>this.props.onChangeEdit(event)}></input>
                    </div>
                    </div>
                    <div className="holder">
                    <div>
                    <label>E-Mail</label>
                    </div>
                    <div>
                    <input type="text" name="email" className="form-group col-lg-10 mx-5"defaultValue={this.props.contact.email} onChange={(event)=>this.props.onChangeEdit(event)}></input>
                    </div>
                    </div>
                    <div className="holder">
                    <div>
                    <label>Phone</label>
                    </div>
                    <div>
                    <input type="text" name="phone" className="form-group col-lg-10 mx-5"defaultValue={this.props.contact.phone} onChange={(event)=>this.props.onChangeEdit(event)}></input>
                    </div>
                    </div>
            </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onSubmit={this.props.onEdit}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            </>
            );
    }
}
 
export default EditContact;
