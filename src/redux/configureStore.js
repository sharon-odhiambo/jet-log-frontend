/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  /* add reducers here */
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export default store;
