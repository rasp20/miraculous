/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SortIcon from '../../../assets/svg/SortIcon';

function TableUserlist({ tableHead, tableData }) {
  const handleTableHead = (key, name) => {
    if (key === 'name') {
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
  return (
    <div className="overflow-x-auto relative shadow-md rounded-sm">
      <table className="w-full text-sm text-left">
        <thead className="text-md bg-gray-50 bg-gray-100">
          <tr>{tableHead.map(({ key, name }) => handleTableHead(key, name))}</tr>
        </thead>
        {tableData ? (
          <tbody>
            {tableData.map((data, index) => (
              <tr className="border-b" key={`data-${index + 1}`}>
                {tableHead.map(({ key }) => (
                  <td className="py-4 px-6" key={`${key}`}>
                    {data[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr className="bg-white border-b">No data</tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

TableUserlist.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.any),
  tableData: PropTypes.arrayOf(PropTypes.any)
};

TableUserlist.defaultProps = {
  tableHead: [
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
      key: 'registered_date',
      name: 'Registered Date'
    }
  ],
  tableData: [
    {
      username: 'username1',
      name: 'Name 1',
      email: 'test1@mail.com',
      gender: 'Male',
      registered_date: '11-09-2022 16:20'
    },
    {
      username: 'username2',
      name: 'Name 2',
      email: 'test2@mail.com',
      gender: 'Female',
      registered_date: '11-09-2022 14:00'
    }
  ]
};

export default TableUserlist;
