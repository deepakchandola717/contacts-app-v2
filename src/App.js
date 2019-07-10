import React from 'react';
import './App.css';
import Contacts from './Components/Contacts'
import contacts_data from '../src/data/contacts.json'

function App() {
  return (
    <>
    
    <Contacts data={contacts_data} />
    </>
  );
}

export default App;
