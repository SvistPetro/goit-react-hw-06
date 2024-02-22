// import { useState, useEffect, useRef } from "react"
import { useSelector } from 'react-redux'
import Form from './components/Form/Form'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'


const App = () => {
  const contacts = useSelector(state => state.contacts);

  // const firstRender = useRef(false);

  // useEffect(() => {
  //   const localStoregeContacts = localStorage.getItem('contacts');
  //   const parcedContacts = JSON.parse(localStoregeContacts);

  //   if (parcedContacts) {
  //     setContacts(parcedContacts);
  //   }
  // }, [])

  // useEffect(() => {
  //   if (firstRender.current) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const handleAddContact = formData => {
    
  //   const duplicate = contacts.some(contact => contact.name.toLowerCase() === formData.name.toLowerCase());
    
  //   if(duplicate) {
  //     alert(`${formData.name} is already in contacts`);
  //     return;
  //   }

  //   setContacts(prevState => [...prevState, formData]);
  //   firstRender.current = true;
  // }

  // const handleDeleteContact = (contactId) => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  //   firstRender.current = true;
  // }

//   const handleFilteredContacts = () => {
//     const filteredContacts = contacts.filter(contact =>
//      contact.name.toLowerCase().includes(filter.toLowerCase())
//    );
//    return filteredContacts;
//  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList onDelete={() => {}}/>
          </>) : (
          <p>Your phonebook is empty. Add first contact!</p>
        )
      }
    </div>
  )
}

export default App
