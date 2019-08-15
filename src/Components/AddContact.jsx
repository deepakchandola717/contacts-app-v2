import React, { Component } from 'react';

class AddContact extends Component {
    state = { 
        Contact:{
            id:0,
            first_name:"",
            last_name:"",
            email:"",
            phone:"",
            avatar_url:"https://robohash.org/iustoautemfacere.png?size=100x100&set=set1"
        }

     }
     handleChange=(event)=>{
        let newContact=Object.assign({},this.state.Contact)
        const change=event.target.name
        newContact[change]=event.target.value
        this.setState({
            Contact:newContact
        })
        // console.log(newContact)
        event.preventDefault()
     }
     
   
     
    render() { 
        return ( 
          <div className="dropdown-menu dropdown-menu-right" id="add-new-form">
          <form className="px-4 py-3" >
            <div className="form-group">
              <label for="exampleDropdownFormFirstName">First Name</label>
              <input type="text" name="first_name" className="form-control" id="exampleDropdownFormFirstName" placeholder="First Name" onChange={this.handleChange}/>
              <label for="exampleDropdownFormLastName">Last Name</label>
              <input type="text" name="last_name" className="form-control" id="exampleDropdownFormLastName" placeholder="Last Name" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label for="exampleDropdownFormEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label for="exampleDropdownFormPassword1">Phone</label>//
              <input type="number" name="phone" className="form-control" id="exampleDropdownFormPhone" placeholder="Phone" onChange={this.handleChange}/>
            </div>
            <button type="submitf" className="btn btn-primary m-4" data-dismiss="modal" onClick={()=>this.props.onAdd(this.state.Contact)}>ADD CONTACT</button>
          </form>
          </div>
         );
    }
}
 
export default AddContact;














