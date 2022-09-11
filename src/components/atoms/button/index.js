import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, width, ...props }) {
  return (
    <button
      type="button"
      className="bg-transparent text-sm hover:bg-blue-500 hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded-sm"
      style={{ width }}
      {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string
};

Button.defaultProps = {
  label: 'Button',
  width: '100px'
};

export default Button;
