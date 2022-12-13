/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import aeroplaneReducer from './aeroplanes/addAeroplanes';

const rootReducer = combineReducers({
  aeroplanes: aeroplaneReducer,
  /* add reducers here */
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export default store;
