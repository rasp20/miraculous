import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../../assets/svg/SearchIcon';

function Search({ width, label, placeholder, onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
    return null;
  };

  return (
    <div style={{ width, marginRight: '45px' }}>
      <span className="text-sm">{label}</span>
      <div className="flex">
        <input
          type="text"
          data-testid="search-input"
          placeholder={placeholder}
          className="bg-transparent py-1 px-4 border border-gray-300 rounded-l-sm text-sm"
          style={{ width }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDownSearch}
        />
        <button
          type="button"
          data-testid="search-button"
          aria-label="search-button"
          className="bg-blue-500 border-gray-300 rounded-r-sm flex items-center cursor-pointer"
          onClick={() => onSearch(keyword)}
        >
          <SearchIcon className="my-auto h-5 w-5 mx-3" />
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  width: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
};

Search.defaultProps = {
  width: '100px',
  label: 'Label',
  placeholder: 'Type here',
  onSearch: () => {}
};

export default Search;
