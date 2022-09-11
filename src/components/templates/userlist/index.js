import React from 'react';
import TableUserlist from '../../organisms/tableUserlist';
import SearchFilterUserlist from '../../organisms/searchFilterUserlist';
import Pagination from '../../molecules/pagination';

function Userlist() {
  return (
    <div>
      <SearchFilterUserlist />
      <TableUserlist />
      <div className="p-4 flex justify-end">
        <Pagination
          className="pagination-bar"
          currentPage={1}
          totalCount={100}
          pageSize={10}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
}

export default Userlist;
