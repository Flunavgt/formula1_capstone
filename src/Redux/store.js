import { configureStore } from '@reduxjs/toolkit';
import driversReducers from './driversReducers';
import circuitsReducers from './CircuitsReducers';
import dStandingsReducers from './DriverStandings';
import statsReducers from './stats';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    driver: driversReducers,
    circuit: circuitsReducers,
    dStandings: dStandingsReducers,
    stats: statsReducers,
  },
});
