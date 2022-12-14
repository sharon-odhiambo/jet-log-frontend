/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import aeroplanesReducer from './aeroplanes/aeroplanes';

const rootReducer = combineReducers({
  aeroplanes: aeroplanesReducer,
  /* add reducers here */
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export default store;
