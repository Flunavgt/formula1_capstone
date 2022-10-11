import { configureStore } from '@reduxjs/toolkit';
import driversReducers from './driversReducers';
import circuitsReducers from './CircuitsReducers';
import dStandingsReducers from './DriverStandings';
import statsReducers from './stats';

const store = configureStore({
  reducer: {
    driver: driversReducers,
    circuit: circuitsReducers,
    dStandings: dStandingsReducers,
    stats: statsReducers,
  },
});

export default store;
