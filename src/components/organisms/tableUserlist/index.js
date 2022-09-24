/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SortNoneIcon from '../../../assets/svg/SortNoneIcon';
import SortAscIcon from '../../../assets/svg/SortAscIcon';
import SortDescIcon from '../../../assets/svg/SortDescIcon';

function TableUserlist({ props }) {
  const { params, setParams, data, loading } = props;
  const [sortColumnName, setSortColumnName] = useState(1);
  const [sortColumnEmail, setSortColumnEmail] = useState(1);
  const [sortColumnGender, setSortColumnGender] = useState(1);
  const [sortColumnRegisteredDate, setSortColumnRegisteredDate] = useState(1);

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
      key: 'registered_date',
      name: 'Registered Date'
    }
  ];

  const handleSortValue = (value) => {
    if (value === 2) {
      return 'desc';
    }
    if (value === 3) {
      return '';
    }
    return 'ascend';
  };

  const determineSortColumnName = () => {
    setSortColumnName(sortColumnName === 3 ? 1 : sortColumnName + 1);
    return handleSortValue(sortColumnName);
  };

  const determineSortColumnEmail = () => {
    setSortColumnEmail(sortColumnEmail === 3 ? 1 : sortColumnEmail + 1);
    return handleSortValue(sortColumnEmail);
  };

  const determineSortColumnGender = () => {
    setSortColumnGender(sortColumnGender === 3 ? 1 : sortColumnGender + 1);
    return handleSortValue(sortColumnGender);
  };

  const determineSortColumnRegisteredDate = () => {
    setSortColumnRegisteredDate(sortColumnRegisteredDate === 3 ? 1 : sortColumnRegisteredDate + 1);
    return handleSortValue(sortColumnRegisteredDate);
  };

  const onSortByName = () => {
    setParams({ ...params, sortBy: 'name', sortOrder: determineSortColumnName() });
    setSortColumnEmail(1);
    setSortColumnGender(1);
    setSortColumnRegisteredDate(1);
  };

  const onSortByEmail = () => {
    setParams({ ...params, sortBy: 'email', sortOrder: determineSortColumnEmail() });
    setSortColumnName(1);
    setSortColumnGender(1);
    setSortColumnRegisteredDate(1);
  };

  const onSortByGender = () => {
    setParams({ ...params, sortBy: 'gender', sortOrder: determineSortColumnGender() });
    setSortColumnName(1);
    setSortColumnEmail(1);
    setSortColumnRegisteredDate(1);
  };

  const onSortByRegisteredDate = () => {
    setParams({
      ...params,
      sortBy: 'registered',
      sortOrder: determineSortColumnRegisteredDate()
    });
    setSortColumnEmail(1);
    setSortColumnName(1);
    setSortColumnGender(1);
  };

  const handleSortIcon = (value) => {
    if (value === 1) {
      return <SortNoneIcon />;
    }
    if (value === 2) {
      return <SortAscIcon />;
    }
    return <SortDescIcon />;
  };

  const handleTableHead = (key, name) => {
    if (key === 'name') {
      return (
        <th
          className={`py-3 px-6 cursor-pointer ${sortColumnName !== 1 ? `bg-gray-100` : ''}`}
          key={`${key}`}
          onClick={() => onSortByName()}
        >
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">{handleSortIcon(sortColumnName)}</span>
          </div>
        </th>
      );
    }
    if (key === 'email') {
      return (
        <th
          className={`py-3 px-6 cursor-pointer ${sortColumnEmail !== 1 ? `bg-gray-100` : ''}`}
          key={`${key}`}
          onClick={() => onSortByEmail()}
        >
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">{handleSortIcon(sortColumnEmail)}</span>
          </div>
        </th>
      );
    }
    if (key === 'gender') {
      return (
        <th
          className={`py-3 px-6 cursor-pointer ${sortColumnGender !== 1 ? `bg-gray-100` : ''}`}
          key={`${key}`}
          onClick={() => onSortByGender()}
        >
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">{handleSortIcon(sortColumnGender)}</span>
          </div>
        </th>
      );
    }
    if (key === 'registered_date') {
      return (
        <th
          className={`py-3 px-6 cursor-pointer ${
            sortColumnRegisteredDate !== 1 ? `bg-gray-100` : ''
          }`}
          key={`${key}`}
          onClick={() => onSortByRegisteredDate()}
        >
          <div className="flex items-center justify-between">
            {name}
            <span className="cursor-pointer">{handleSortIcon(sortColumnRegisteredDate)}</span>
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

  const handleTableBodyCell = (el, key) => {
    if (key === 'name') {
      return (
        <td
          className={`py-4 px-6 cursor-pointer ${sortColumnName !== 1 ? `bg-gray-100` : ''}`}
          key={`${key}`}
          onClick={() => onSortByName()}
        >
          {el[key]}
        </td>
      );
    }
    if (key === 'email') {
      return (
        <td
          className={`py-4 px-6 cursor-pointer ${sortColumnEmail !== 1 ? `bg-gray-100` : ''}`}
          key={`${key}`}
          onClick={() => onSortByEmail()}
        >
          {el[key]}
        </td>
      );
    }
    if (key === 'gender') {
      return (
        <td
          className={`py-4 px-6 cursor-pointer ${sortColumnGender !== 1 ? `bg-gray-100` : ''}`}
          key={`${key}`}
          onClick={() => onSortByGender()}
        >
          {el[key]}
        </td>
      );
    }
    if (key === 'registered_date') {
      return (
        <td
          className={`py-4 px-6 cursor-pointer ${
            sortColumnRegisteredDate !== 1 ? `bg-gray-100` : ''
          }`}
          key={`${key}`}
          onClick={() => onSortByRegisteredDate()}
        >
          {el[key]}
        </td>
      );
    }
    return (
      <td className="py-4 px-6" key={`${key}`}>
        {el[key]}
      </td>
    );
  };

  const handleTableBody = (tableData, isLoading) => {
    if (tableData && !loading) {
      return (
        <tbody>
          {tableData.map((el, index) => (
            <tr className="border-b" key={`tableData-${index + 1}`}>
              {tableHead.map(({ key }) => handleTableBodyCell(el, key))}
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
