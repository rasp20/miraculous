import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserlisAsync } from './slice';
import UserList from '../../components/templates/userlist';

function Home() {
  const dispatch = useDispatch();
  const pageSize = 10;
  const { data, loading, error } = useSelector((state) => state.home);

  const [params, setParams] = useState({
    currentPage: 1,
    keyword: '',
    gender: '',
    sortBy: '',
    sortOrder: ''
  });

  useEffect(() => {
    const query = `?page=${params.currentPage}&results=${pageSize}&keyword=${params.keyword}&gender=${params.gender}&sortBy=${params.sortBy}&sortOrder=${params.sortOrder}`;
    dispatch(getUserlisAsync(query));
  }, [params]);

  const props = { params, setParams, pageSize, data, loading, error };
  return (
    <div className="p-8">
      <UserList props={props} />
    </div>
  );
}

export default Home;
