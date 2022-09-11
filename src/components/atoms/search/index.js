import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../../assets/svg/SearchIcon';

function Search({ width, label, placeholder, ...props }) {
  return (
    <div style={{ width, marginRight: '45px' }}>
      <span className="text-sm">{label}</span>
      <div className="flex">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent py-1 px-4 border border-gray-300 rounded-l-sm text-sm"
          style={{ width }}
          {...props}
        />
        <span className="bg-blue-500 border-gray-300 rounded-r-sm flex items-center">
          <SearchIcon className="my-auto h-5 w-5 mx-3" />
        </span>
      </div>
    </div>
  );
}

Search.propTypes = {
  width: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

Search.defaultProps = {
  width: '100px',
  label: 'Label',
  placeholder: 'Type here'
};

export default Search;
