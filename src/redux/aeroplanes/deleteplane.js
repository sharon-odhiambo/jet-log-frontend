import { createAsyncThunk } from '@reduxjs/toolkit';

const DELETE_AEROPLANE = 'jet-log-frontend/aeroplanes/DELETE_AEROPLANE';
const DELETE_PLANE = 'jet-log-frontend/aeroplanes/DELETE_PLANE';
const initialState = [];

export const deleteAeroplane = createAsyncThunk(DELETE_AEROPLANE, async () => {
  const data = await fetch('http://127.0.0.1:3000/api/v1/aeroplanes');
  const response = await data.json();
  return response;
});

export const deletePlane = createAsyncThunk(
  DELETE_PLANE,
  async (id) => {
    await fetch(`http://127.0.0.1:3000/api/v1/aeroplanes/${id}`, {
      method: 'DELETE',
    });
    return id;
  },
);

const deleteplanesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DELETE_AEROPLANE}/fulfilled`:
      return action.payload;
    case `${DELETE_PLANE}/fulfilled`:
      return state.filter((state) => state.id !== action.payload);
    default:
      return state;
  }
};

export default deleteplanesReducer;
