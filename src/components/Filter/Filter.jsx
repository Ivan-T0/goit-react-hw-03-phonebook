import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};


export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,

}