import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL2 = 'https://ergast.com/api/f1/2022/circuits.json?';

const getCircuits = createAsyncThunk('circuitss/retrieveCircuits', async () => {
  const response = await fetch(API_URL2);
  const circuitsList = await response.json();
  const circuits = circuitsList.MRData.CircuitTable.Circuits;
  return circuits;
});
const initialState = [];

const circuitsSlice = createSlice({
  name: 'circuits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCircuits.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = circuitsSlice;
export { actions, getCircuits };
export default reducer;
