import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getDrivers = createAsyncThunk('drivers/retrieveDrivers', async (value = '2022') => {
  const response = await fetch(`http://ergast.com/api/f1/${value}/drivers.json?`);
  const driverstList = await response.json();
  const pilots = driverstList.MRData.DriverTable.Drivers;
  return pilots;
});
const initialState = [];

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrivers.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = driversSlice;
export { actions, getDrivers };
export default reducer;
