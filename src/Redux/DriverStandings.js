import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const URL_DSTAND = 'http://ergast.com/api/f1/current/driverStandings.json?';

const getDStandings = createAsyncThunk('dStandings/getDStandings', async () => {
  const response = await fetch(URL_DSTAND);
  const pilotStand = await response.json();
  const dStandings = pilotStand.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  return dStandings;
});

const dStandingsSlice = createSlice({
  name: 'dStandings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDStandings.fulfilled,
      (state, action) => action.payload);
  },
});

const { actions, reducer } = dStandingsSlice;
export { actions, getDStandings };
export default reducer;
