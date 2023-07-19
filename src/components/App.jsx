import { useState, useEffect } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const strigifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(strigifiedContacts) ?? [];
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const addContact = contactData => {
    const isAlready = contacts.some(
      contact => contact.name === contactData.name
    );
    const newContact = {
      id: nanoid(),
      ...contactData,
    };
    isAlready
      ? alert(`${contactData.name} is already in contacts`)
      : setContacts(() => [...contacts, newContact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const onRemove = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      {contacts.length ? (
        <h2>Contacts</h2>
      ) : (
        <p className="message">No contacts in the phonebook</p>
      )}
      {!!contacts.length && <Filter handleChangeFilter={handleChangeFilter} />}
      <Contacts contacts={filterContacts()} onRemove={onRemove} />
    </Container>
  );
}

export default App;
