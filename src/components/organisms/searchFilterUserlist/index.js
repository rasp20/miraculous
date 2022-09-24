/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../atoms/search';
import Filter from '../../atoms/dropdown';
import Button from '../../atoms/button';

function SearchFilterUserlist({ props }) {
  const { params, setParams } = props;
  const filterOptions = [
    { value: '', label: 'All' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  return (
    <div className="flex space-x-4 pb-8 items-end">
      <Search
        placeholder="Search..."
        label="Search"
        onSearch={(keyword) => setParams({ ...params, keyword })}
      />
      <Filter
        label="Gender"
        options={filterOptions}
        onFilter={(filter) => setParams({ ...params, gender: filter })}
      />
      <Button
        label="Reset Filter"
        onClick={() =>
          setParams({
            ...params,
            currentPage: 1,
            keyword: '',
            gender: '',
            sortBy: '',
            sortOrder: ''
          })
        }
      />
    </div>
  );
}

const paramsShape = {
  currentPage: PropTypes.number,
  keyword: PropTypes.string,
  gender: PropTypes.gender,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string
};

SearchFilterUserlist.propTypes = {
  props: PropTypes.any.isRequired,
  params: PropTypes.objectOf(PropTypes.shape(paramsShape)),
  setParams: PropTypes.func
};

SearchFilterUserlist.defaultProps = {
  params: {},
  setParams: () => {}
};

export default SearchFilterUserlist;
