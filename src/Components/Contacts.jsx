import React, { Component } from 'react';
import Contact from './Contact';
import NavBar from './Navbar';
import EditContact from './EditContact';

class Contacts extends Component {
    state = { 
        contactList:[],
        currentState:{},
        search:'',
    }

    componentDidMount(){
this.setState({contactList: this.props.data})
    }

    currentStateSetter=(currentObject)=>{
        this.setState({
            currentState:currentObject
        })
        console.log("current state changed", this.state.currentState)
    }

    handleDelete=(id)=>{
        
        const updatedContactList=this.state.contactList.filter(contact=>contact.id!==id)
        this.setState({
            contactList:updatedContactList
        })
    }

    handleAddition=(newContactObject)=>{
        
        let copyNewContact = Object.assign({}, newContactObject)
        let newContactList=[...this.state.contactList]
        copyNewContact["id"]=this.state.contactList.length+1
        newContactList.unshift(copyNewContact)
        this.setState({
            contactList:newContactList
        })
    }

    // handleEdit=(updatedObject)=>{
    //     let copyNewContact = Object.assign({}, updatedObject)
    //     let editedContactList=this.state.contactList.filter(contact=>contact.id!==copyNewContact.id)
    //     editedContactList.unshift(copyNewContact)
    //     // console.log("before new Contact List", editedContactList)
        
    //     this.setState({
    //         contactList: editedContactList
    //     })
    //     console.log("new Contact List", editedContactList)
        
    //     setTimeout(() => {
    //         console.log("updated contactList state:", this.state.contactList)
    //     }, 1000)
    //     // console.log("new Contact List", editedContactList)
    //     // console.log("objectReceived", updatedObject)
    // }


    handleEditChange=(event)=>{
        
    let newContact=Object.assign({}, this.state.currentState)
    const change=event.target.name
    newContact[change]=event.target.value
    this.setState({
        currentState:newContact
    })
    console.log("handling change",newContact)
    }

    handleEdit=(event)=>{
        event.preventDefault()
        const updatedContactList=this.state.contactList.filter(contact=>contact.id!==this.state.currentState.id)
        updatedContactList.unshift(this.state.currentState)
        this.setState({
            contactList:updatedContactList
        })

    }


    handleSearch=(searchString)=>{
        console.log("recieved input", searchString)
        this.setState({
            search:searchString
        })
        console.log("updated string", this.state.search)
    }


    render() { 
        const updatedContactList =this.state.contactList
        // .filter(contact=>contact.first_name.toLowerCase().includes(this.state.search.toLowerCase())||contact.last_name.toLowerCase().includes(this.state.search.toLowerCase()))


        return ( 
            <> 
                
                <NavBar onAdd={this.handleAddition} onSearch={this.handleSearch}/>
                {
                    
                    this.state.contactList.filter(contact=>contact.first_name.toLowerCase().includes(this.state.search.toLowerCase())||contact.last_name.toLowerCase().includes(this.state.search.toLowerCase())||contact.phone.split(" ").join("").includes(this.state.search))
                    .map(contact=><Contact key={contact.id} contact={contact} onDelete={this.handleDelete} currentStateFunction={this.currentStateSetter}/>)
                }
                <EditContact contact={this.state.currentState} onEdit={this.handleEdit} onChangeEdit={this.handleEditChange}/>
            </>
         );
    }
}
 
export default Contacts;