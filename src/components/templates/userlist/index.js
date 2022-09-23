/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableUserlist from '../../organisms/tableUserlist';
import SearchFilterUserlist from '../../organisms/searchFilterUserlist';
import Pagination from '../../molecules/pagination';

function Userlist({ props }) {
  const totalCount = 100; // this total is hard coded because from API not return total data and the API can provide up to 5000 row data
  const { params, setParams, pageSize } = props;

  return (
    <div>
      <SearchFilterUserlist props={props} />
      <TableUserlist props={props} />
      <div className="p-4 flex justify-end">
        <Pagination
          className="pagination-bar"
          currentPage={params.currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={(page) => setParams({ ...params, currentPage: page })}
        />
      </div>
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

Userlist.propTypes = {
  params: PropTypes.objectOf(PropTypes.shape(paramsShape)),
  setParams: PropTypes.func,
  pageSize: PropTypes.number,
  props: PropTypes.any.isRequired
};

Userlist.defaultProps = {
  params: {},
  setParams: () => {},
  pageSize: 10
};

export default Userlist;
