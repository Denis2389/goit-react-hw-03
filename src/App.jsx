import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { useEffect, useState } from "react"



function App() {
  const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},   
  ])

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(prevContacts => [
        ...prevContacts,
        ...savedContacts.filter(savedContacts => !prevContacts.some(prevContacts => prevContacts.id === savedContacts.id))
      ])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 0, marginLeft: -100 }}>
        Phonebook
      </h1>
      <ContactForm onSubmit={newContact => setContacts([...contacts, newContact])} />
      <SearchBox value={filter} onChange={e => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete}/>
    </div>
  );
}

export default App
