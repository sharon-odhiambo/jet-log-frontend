import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_AEROPLANE = 'jet-log-frontend/aeroplanes/GET_AEROPLANE';
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

const aeroplanesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AEROPLANE}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default aeroplanesReducer;
