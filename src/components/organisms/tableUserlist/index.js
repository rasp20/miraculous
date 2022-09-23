/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SortIcon from '../../../assets/svg/SortIcon';

function TableUserlist({ props }) {
  const { params, setParams, data, loading } = props;

  const tableHead = [
    {
      key: 'username',
      name: 'Username'
    },
    {
      key: 'name',
      name: 'Name'
    },
    {
      key: 'email',
      name: 'Email'
    },
    {
      key: 'gender',
      name: 'Gender'
    },
    {
      key: 'registered_date'
    }
  ];

  const handleTableHead = (key, name) => {
    if (key === 'name') {
      return (
        <th
          className="py-3 px-6 cursor-pointer"
          key={`${key}`}
          onClick={() => setParams({ ...params, sortBy: 'name' })}
        >
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">
              <SortIcon />
            </span>
          </div>
        </th>
      );
    }
    if (key === 'email') {
      return (
        <th className="py-3 px-6 cursor-pointer" key={`${key}`}>
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">
              <SortIcon />
            </span>
          </div>
        </th>
      );
    }
    if (key === 'gender') {
      return (
        <th className="py-3 px-6 cursor-pointer" key={`${key}`}>
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">
              <SortIcon />
            </span>
          </div>
        </th>
      );
    }
    if (key === 'registered_date') {
      return (
        <th className="py-3 px-6 cursor-pointer" key={`${key}`}>
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">
              <SortIcon />
            </span>
          </div>
        </th>
      );
    }
    return (
      <th className="py-3 px-6" key={`${key}`}>
        {name}
      </th>
    );
  };

  const handleTableBody = (tableData, isLoading) => {
    if (tableData && !loading) {
      return (
        <tbody>
          {tableData.map((el, index) => (
            <tr className="border-b" key={`tableData-${index + 1}`}>
              {tableHead.map(({ key }) => (
                <td className="py-4 px-6" key={`${key}`}>
                  {el[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      );
    }
    if (isLoading) {
      return (
        <tbody>
          <tr className="bg-white border-b">
            <td className="py-4 flex text-center">Loading...</td>
          </tr>
        </tbody>
      );
    }
    if (!tableData && !isLoading) {
      return (
        <tbody>
          <tr className="bg-white border-b">No data</tr>
        </tbody>
      );
    }
    return null;
  };
  return (
    <div className="overflow-x-auto relative shadow-md rounded-sm">
      <table className="w-full text-sm text-left">
        <thead className="text-md bg-gray-50 bg-gray-100">
          <tr>{tableHead.map(({ key, name }) => handleTableHead(key, name))}</tr>
        </thead>
        {handleTableBody(data, loading)}
      </table>
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

TableUserlist.propTypes = {
  props: PropTypes.any.isRequired,
  params: PropTypes.objectOf(PropTypes.shape(paramsShape)),
  setParams: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool
};

TableUserlist.defaultProps = {
  params: {},
  setParams: () => {},
  data: [],
  loading: false
};

export default TableUserlist;
