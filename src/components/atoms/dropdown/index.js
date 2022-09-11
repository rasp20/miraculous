import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ width, label, options, ...props }) {
  return (
    <div style={{ width }}>
      <span className="text-sm">{label}</span>
      <select
        id="select"
        className="border border-gray-300 text-sm rounded-sm focus:ring-blue-500 block p-1"
        style={{ width }}
        {...props}
      >
        {options
          ? options.map((option) => <option value={option.value}>{option.label}</option>)
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
  )
};

Dropdown.defaultProps = {
  width: '200px',
  label: 'Label',
  options: []
};

export default Dropdown;
