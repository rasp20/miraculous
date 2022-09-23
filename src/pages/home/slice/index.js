import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';

const baseUrl = 'https://randomuser.me/api';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getUserlist: (state) => {
      state.loading = true;
      state.data = [];
    },
    getUserlistSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getUserlistFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const getUserlisAsync = (data) => async (dispatch) => {
  dispatch(getUserlist());
  try {
    const response = await axios.get(`${baseUrl}/${data}`);
    const userlist = response.data.results;

    userlist.forEach((el) => {
      el.username = el.login.username;
      el.name = `${el.name.first} ${el.name.last}`;
      el.registered_date = dayjs(el.registered.date).format('DD-MM-YYYY hh:mm');
    });
    dispatch(getUserlistSuccess(userlist));
  } catch (err) {
    dispatch(getUserlistFailure(err));
  }
};

export const { getUserlist, getUserlistSuccess, getUserlistFailure } = homeSlice.actions;

export default homeSlice.reducer;
