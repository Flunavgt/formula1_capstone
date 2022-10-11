import Reducer, { getDrivers } from '../../Redux/driversReducers';

const payload = [
  {
    reserved: false,
    description:
      'drivers',
    driverId: [
      'albon',
      'alonso',
    ],
    // id: 1,
    // driverId: 'albon',
  },
];

describe('testing for slice functions', () => {
  const initialState = {
    drivers: [],
    status: 'idle',
  };

  const pendingState = { type: getDrivers.pending };
  const fulfilledState = { type: getDrivers.fulfilled, payload };

  it('Test for thunk pending state', () => {
    expect(Reducer(initialState, pendingState)).toEqual({
      drivers: [],
      status: 'idle',
    });
  });
  it('Test for thunk fulfiled state', () => {
    expect(Reducer(initialState, { ...fulfilledState })).toHaveLength(1);
  });
});
