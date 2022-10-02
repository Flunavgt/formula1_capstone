// import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDStandings } from '../../Redux/DriverStandings';

const DriverStandings = () => {
  const dispatch = useDispatch();
  const dStandingsData = useSelector((state) => state.dStandings);
  useEffect(() => {
    if (!dStandingsData.length) {
      dispatch(getDStandings[0]());
    }
  });
  console.log(dStandingsData[0].Driver.givenName);
  console.log(dStandingsData[0].points);
  // const pepe = dStandingsData[0].Driver.givenName;
  // const pepa = dStandingsData[0].Driver.familyName;
  const pipo = dStandingsData;
  // const fifi = dStandingsData[0].position;
  // const fufu = dStandingsData[0].points;
  // const titi = dStandingsData[0].Constructors[0].name;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pilot</th>
            <th>Position</th>
            <th>Points</th>
            <th>Wins</th>
            <th>Constructor</th>
          </tr>
        </thead>
        <tbody>
          {pipo.map((standP) => (
            <tr key={standP.Driver.driverId}>
              <td>
                {standP.Driver.givenName}
                {standP.Driver.familyName}
              </td>
              <td>{standP.position}</td>
              <td>{standP.points}</td>
              <td>{standP.wins}</td>
              <td>{standP.Constructors[0].name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
