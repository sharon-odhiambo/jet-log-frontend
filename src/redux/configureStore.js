/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import aeroplanesReducer from './aeroplanes/aeroplanes';
import deleteplanesReducer from './aeroplanes/deleteplane';

const rootReducer = combineReducers({
  aeroplanes: aeroplanesReducer,
  deleteplanes: deleteplanesReducer
  /* add reducers here */
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export default store;
