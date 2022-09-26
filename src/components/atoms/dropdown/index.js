import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ width, label, options, onFilter }) {
  return (
    <div style={{ width }}>
      <span className="text-sm">{label}</span>
      <select
        id="select"
        data-testid="select"
        className="border border-gray-300 text-sm rounded-sm focus:ring-blue-500 block p-1"
        defaultValue=""
        style={{ width }}
        onChange={(e) => onFilter(e.target.value)}
        key="select-gender"
      >
        {options
          ? options.map((option) => (
              <option value={option.value} key={option.value} data-testid="select-option">
                {option.label}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  width: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  onFilter: PropTypes.func
};

Dropdown.defaultProps = {
  width: '200px',
  label: 'Label',
  options: [
    { value: 'all', label: 'All' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ],
  onFilter: () => {}
};

export default Dropdown;
