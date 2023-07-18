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

  const addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts(() => [...contacts, newContact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const onRemove = contactId => {
    setContacts(() => contacts.filter(contact => contact.id !== contactId));
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
