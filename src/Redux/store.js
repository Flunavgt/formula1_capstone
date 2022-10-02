import { configureStore } from '@reduxjs/toolkit';
import driversReducers  from './driversReducers'

export const store = configureStore({
  reducer: {
    driver: driversReducers,
  },
});
