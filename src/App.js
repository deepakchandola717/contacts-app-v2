import React from 'react';
import './App.css';
import Contacts from './Components/Contacts'
import NavBar from './Components/Navbar'
import contacts_data from '../src/data/contacts.json'

function App() {
  return (
    <>
    <NavBar/>
    <Contacts data={contacts_data} />
    </>
  );
}

export default App;
