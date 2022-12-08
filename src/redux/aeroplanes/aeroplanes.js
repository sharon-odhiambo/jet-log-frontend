import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_AEROPLANE = 'jet-log-frontend/aeroplanes/GET_AEROPLANE';
const initialState = '';

export const fetchAeroplane = createAsyncThunk(GET_AEROPLANE, async () => {
  const data = await fetch('http://127.0.0.1:3000/api/v1/aeroplanes');
  const response = await data.json();
  return response;
});

const aeroplanesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AEROPLANE}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default aeroplanesReducer;
