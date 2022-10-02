import { configureStore } from '@reduxjs/toolkit';
import driversReducers from './driversReducers';
import circuitsReducers from './CircuitsReducers';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    driver: driversReducers,
    circuit: circuitsReducers,
  },
});
