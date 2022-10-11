import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Circuits from '../../Modules/Circuits/Circuits';
import Drivers from '../../Modules/Drivers/Drivers';
import DriverStandings from '../../Modules/DriverStandings/DriverStandings';
import store from '../../Redux/store';

describe('Rocket components', () => {
  it('Render component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Circuits />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Mission components', () => {
  it('Render component', () => {
    const treeMission = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Drivers />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(treeMission).toMatchSnapshot();
  });
});

describe('Testing the Profile component', () => {
  test('Check rendering of the Profile component', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <DriverStandings />
        </Provider>
      </Router>,
    );
    expect(getByText('Pilot')).toBeInTheDocument();
  });
});
