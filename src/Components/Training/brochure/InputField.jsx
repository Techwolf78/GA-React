
import PropTypes from 'prop-types';

const InputField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="mb-2">
    <label className="block text-gray-700 mb-0.5" htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputField;
