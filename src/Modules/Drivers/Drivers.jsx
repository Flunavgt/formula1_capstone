// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../Redux/driversReducers';
import albon from '../../app/Resources/albon_front.png';

const Drivers = () => {
  const dispatch = useDispatch();
  const driversData = useSelector((state) => state.driver);
  useEffect(() => {
    if (!driversData.length) {
      dispatch(getDrivers());
    }
  });
  const pilotsList = driversData.map((drives) => (
    <Drivers key={drives.driverId} driver={drives.givenName} />
  ));
  console.log(pilotsList);
  return (
    <div className="driverslist">
      {driversData.map((driversData) => (
        <div>
          <img src={albon} alt="Albon" />
          <p>{driversData.givenName} {driversData.familyName}</p>
          <p>{driversData.nationality}</p>
          <p>{driversData.dateOfBirth}</p>
          <a href={driversData.url}>Wikipedia </a>
        </div>
      ))}
    </div>
  );
};

// const Driver = (props) => {
//   const { driver } = props;
//   return (
//     <div className="each">
//       <div className="infor">
//         <h2>Driversi</h2>
//         <p>
//           {driver.givenName}
//         </p>
//       </div>
//     </div>
//   );
// };



// Driver.propTypes = {
//   driver: PropTypes.shape({
//     givenName: PropTypes.string,
//     driverId: PropTypes.string,
//   }).isRequired,
// };


export default Drivers;



// import React from 'react'

// function Drivers() {
//     const dispatch = useDispatch();

//   useDispatch(getDrivers());
//   return (
//     <div>Drivers</div>
//   )
// }

// export default Drivers;