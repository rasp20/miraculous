import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, width, onClick }) {
  return (
    <button
      type="button"
      className="bg-transparent text-sm hover:bg-blue-500 hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded-sm"
      style={{ width }}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Button',
  width: 'auto',
  onClick: () => {}
};

export default Button;
