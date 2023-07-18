import { useState } from 'react';
import StyledContactForm from './StyledContactForm';
import PropTypes from 'prop-types';

function ContactForm(contacts, addContact) {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [states, setStates] = useState({ name: '', number: '' });

  const onInputChange = e => {
    setStates({ [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const isAlready = contacts.some(contact => contact.name === states.name);

    isAlready
      ? alert(`${states.name} is already in contacts`)
      : addContact(states);

    e.target.reset();
  };

  return (
    <>
      <StyledContactForm onSubmit={onFormSubmit}>
        <label>
          Name:
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            maxLength="24"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
              For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.
              Maximum length of name is 24 characters"
            required
          />
        </label>
        <label>
          Phone number:
          <input
            onChange={onInputChange}
            type="tel"
            name="number"
            maxLength="12"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </StyledContactForm>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  addContact: PropTypes.func.isRequired,
};
