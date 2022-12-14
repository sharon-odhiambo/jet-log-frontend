/* eslint-disable */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import aeroplanesReducer from './aeroplanes/aeroplanes';
import addAeroplaneReducer from './aeroplanes/addAeroplanes';

const rootReducer = combineReducers({
  aeroplanes: aeroplanesReducer,
  addAeroplanes: addAeroplaneReducer,
  /* add reducers here */
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
