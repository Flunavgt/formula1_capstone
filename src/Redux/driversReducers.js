import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://ergast.com/api/f1/2022/drivers.json?';

const getDrivers = createAsyncThunk('drivers/retrieveDrivers', async () => {
  const response = await fetch(API_URL);
  const driverstList = await response.json();
  const pilots = driverstList.MRData.DriverTable.Drivers
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