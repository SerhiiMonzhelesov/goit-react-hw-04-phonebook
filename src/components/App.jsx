import { Component } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const strigifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(strigifiedContacts) ?? [];

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onRemove = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />
        {contacts.length ? (
          <h2>Contacts</h2>
        ) : (
          <p className="message">No contacts in the phonebook</p>
        )}
        {!!contacts.length && (
          <Filter handleChangeFilter={this.handleChangeFilter} />
        )}
        <Contacts contacts={this.filterContacts()} onRemove={this.onRemove} />
      </Container>
    );
  }
}

export default App;
