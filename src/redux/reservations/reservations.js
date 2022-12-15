import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_RESERVATIONS = 'jet-log-frontend/reservations/GET_RESERVATIONS';
const initialState = [];

export const fetchResevations = createAsyncThunk(GET_RESERVATIONS, async () => {
  const session = JSON.parse(localStorage.getItem('session'));

  const data = await fetch('http://127.0.0.1:3000/api/v1/reservations', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${session.token}`,
    },
  });
  const response = await data.json();
  return response;
});

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_RESERVATIONS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
