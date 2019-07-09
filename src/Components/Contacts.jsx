import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = { 
        contactList:this.props.data
     }
    render() { 
        return ( 
            <>
                {
                    this.state.contactList.map(contact=><Contact key={contact.id} contact={contact}/>)
                }
            </>
         );
    }
}
 
export default Contacts;