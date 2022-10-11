import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getStats = createAsyncThunk('stats/statsDrivers', async (namdr) => {
  const response = await fetch(`http://ergast.com/api/f1/2022/drivers/${namdr}/results.json?`);
  const statsList = await response.json();
  const statics = statsList.MRData.RaceTable.Races;
  return statics;
});
const initialState = [];

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    clear() {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStats.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = statsSlice;
export { actions, getStats };
export default reducer;
