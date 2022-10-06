// import React from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getDStandings } from '../../Redux/DriverStandings';
import './dStandings.css';

const DriverStandings = () => {
  const dispatch = useDispatch();
  const dStandingsData = useSelector((state) => state.dStandings);
  useEffect(() => {
    if (!dStandingsData.length) {
      dispatch(getDStandings());
    }
  });
  const pipo = dStandingsData;
  return (
    <div className="dStandingList">
      <Table striped bordered hover size="sm" className="mt-4 mx-auto w-75">
        <thead>
          <tr>
            <th>Pilot</th>
            <th>Position</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {pipo.map((standP) => (
            <tr key={standP.Driver.driverId}>
              <td>
                {standP.Driver.givenName}
                {standP.Driver.familyName}
              </td>
              <td className="centerInfo">{standP.position}</td>
              <td className="centerInfo">{standP.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DriverStandings;
