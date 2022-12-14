import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import aeroplanesReducer from './aeroplanes/aeroplanes';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  reservations: reservationsReducer,
  aeroplanes: aeroplanesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
