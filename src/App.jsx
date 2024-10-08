import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { nanoid } from 'nanoid'
import { useState } from "react"



function App() {
  const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},   
  ])

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: 0, marginLeft: -110 }}>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
}

export default App
