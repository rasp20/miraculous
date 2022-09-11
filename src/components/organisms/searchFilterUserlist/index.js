import React from 'react';
import Search from '../../atoms/search';
import Filter from '../../atoms/dropdown';
import Button from '../../atoms/button';

function SearchFilterUserlist() {
  return (
    <div className="flex space-x-4 pb-8 items-end">
      <Search />
      <Filter />
      <Button />
    </div>
  );
}

export default SearchFilterUserlist;
