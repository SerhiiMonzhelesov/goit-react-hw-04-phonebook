import StyledFilter from './StyledFilter';
import PropTypes from 'prop-types';

function Filter({ handleChangeFilter }) {
  return (
    <StyledFilter>
      Find contacts by name
      <input type="text" onChange={handleChangeFilter}></input>
    </StyledFilter>
  );
}

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};
