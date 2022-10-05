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
  console.log(statsData);
  useEffect(() => {
    if (statsData.length === 0) {
      dispatch(getStats(namdr));
    }
    // return () => {
    //   dispatch(actions.clear());
    // };
  });
  console.log(statsData);
  return (
    <div className="dStandingList">
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
              // eslint-disable-next-line no-sequences
              // console.log(stat),
              (
                <tr key={nanoid()}>
                  <td>{stat.Circuit.circuitName}</td>
                  <td className="centerInfo">{stat.Results[0].position}</td>
                  <td className="centerInfo">{stat.round}</td>
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

// const Stats = () => {
//   const dispatch = useDispatch();
//   const statsData = useSelector((state) => state.stats);
//   useEffect(() => {
//     if (!statsData.length) {
//       dispatch(getStats());
//     }
//   });
//   return (
//     <div className="dStandingList">
//       <Table striped bordered hover size="sm" className="mt-4 mx-auto w-75">
//         <thead>
//           <tr>
//             <th>Circuit</th>
//             <th>Finish</th>
//             <th>Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {statsData.map((stat) => (
//             <tr key={nanoid()}>
//               <td>{stat.raceName}</td>
//               <td className="centerInfo">{stat.Results[0].position}</td>
//               <td className="centerInfo">{stat.Results[0].points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Stats;
