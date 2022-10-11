import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { nanoid } from '@reduxjs/toolkit';
import { getStats } from '../Redux/stats';

function Details() {
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const namdr = state.state.driverId;
  const statsData = useSelector((state) => state.stats);
  useEffect(() => {
    dispatch(getStats(namdr));
  }, []);
  return (
    <div className="dStandingList">
      <h1 className="tableTitle">2022 Stats</h1>
      <Table striped bordered hover size="sm" className="mt-4 mx-auto w-75">
        <thead>
          <tr>
            <th>Circuit</th>
            <th>Finish</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {statsData.map(
            (stat) => (
              (
                <tr key={nanoid()}>
                  <td>{stat.Circuit.circuitName}</td>
                  <td className="centerInfo">{stat.Results[0].position}</td>
                  <td className="centerInfo">{stat.Results[0].points}</td>
                </tr>
              )
            ),
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Details;
