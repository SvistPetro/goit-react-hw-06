import { useSelector } from 'react-redux'
import Form from './components/Form/Form'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'


const App = () => {
  const contacts = useSelector(state => state.contacts.contactList);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>) : (
          <p>Your phonebook is empty. Add first contact!</p>
        )
      }
    </div>
  )
}

export default App
