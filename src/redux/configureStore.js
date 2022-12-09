import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import aeroplanesReducer from './aeroplanes/aeroplanes';

const store = configureStore({
  reducer: aeroplanesReducer,
  middleware: [thunk],
});

export default store;
