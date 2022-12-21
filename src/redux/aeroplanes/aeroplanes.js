import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_AEROPLANE = 'jet-log-frontend/aeroplanes/ADD_AEROPLANE';
const GET_AEROPLANE = 'jet-log-frontend/aeroplanes/GET_AEROPLANE';
const DELETE_PLANE = 'jet-log-frontend/aeroplanes/DELETE_PLANE';
const initialState = [];

export const fetchAeroplane = createAsyncThunk(GET_AEROPLANE, async () => {
  const data = await fetch('http://127.0.0.1:3000/api/v1/aeroplanes');
  const response = await data.json();
  const newList = Object.keys(response);
  const aeros = [];
  newList.map((key) => aeros.push({
    id: response[key].id,
    name: response[key].name,
    make_year: response[key].make_year,
    country: response[key].country_of_origin,
    fuel: response[key].fuel_economy,
    image: response[key].photo,
    description: response[key].description,
    passengers: response[key].passenger_capacity,
    crew: response[key].crew,
  }));
  return aeros;
});

export const addAeroplane = (aeroplane) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/aeroplanes', aeroplane)
    .then((res) => {
      dispatch({
        type: ADD_AEROPLANE,
        payload: res.data,
      });
    })
    .catch((err) => err);
};

export const deletePlane = createAsyncThunk(DELETE_PLANE, async (id) => {
  await fetch(`http://127.0.0.1:3000/api/v1/aeroplanes/${id}`, {
    method: 'DELETE',
  });
  return +id;
});

const aeroplanesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AEROPLANE}/fulfilled`:
      return action.payload;
    case ADD_AEROPLANE:
      return [...state, action.payload];
    case `${DELETE_PLANE}/fulfilled`:
      return state.filter((state) => state.id !== action.payload);
    default:
      return state;
  }
};

export default aeroplanesReducer;
