import StyledContacts from './StyledContacts';
import { ImBin } from 'react-icons/im';
import PropTypes from 'prop-types';

function Contacts({ contacts, onRemove }) {
  return (
    <StyledContacts>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className="item">
            <p className="text">{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onRemove(id)} className="btn">
              <ImBin className="icon" />
            </button>
          </li>
        );
      })}
    </StyledContacts>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
