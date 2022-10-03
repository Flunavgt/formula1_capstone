// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../Redux/driversReducers';
import { imagesPool } from './driverimg';
import './Drivers.css';
// import albon from '../../app/Resources/Drivers/albon_front.png';

// const fefe = 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/jcr:content/image.img.2048.medium.jpg/1646750995556.jpg';

// const imagesPool = [
//   'images/Drivers/albon_front.png',
//   'images/Drivers/alonso_front.png',
//   'images/Drivers/bottas_front.png',
//   'images/Drivers/de_vries_front.png',
//   'images/Drivers/gasly_front.png',
//   'images/Drivers/hamilton_front.png',
//   'images/Drivers/hulkenberg_front.png',
//   'images/Drivers/latifi_front.png',
//   'images/Drivers/leclerc_front.png',
//   'images/Drivers/kevin_magnussen_front.png',
//   'images/Drivers/norris_front.png',
//   'images/Drivers/ocon_front.png',
//   'images/Drivers/perez_front.png',
//   'images/Drivers/ricciardo_front.png',
//   'images/Drivers/russell_front.png',
//   'images/Drivers/sainz_front.png',
//   'images/Drivers/mick_schumacher_front.png',
//   'images/Drivers/stroll_front.png',
//   'images/Drivers/tsunoda_front.png',
//   'images/Drivers/max_verstappen_front.png',
//   'images/Drivers/vettel_front.png',
//   'images/Drivers/zhou_front.png',
// ];

const Drivers = () => {
  const dispatch = useDispatch();
  const driversData = useSelector((state) => state.driver);
  useEffect(() => {
    if (!driversData.length) {
      dispatch(getDrivers());
    }
  });
  return (
    <div className="driverslist">
      {driversData.map((driversData, index) => (
        <div key={driversData.driverId}>
          <img
            key={imagesPool[index]}
            src={imagesPool[index]}
            alt={imagesPool[index]}
          />
          <p>
            {driversData.givenName}
            {driversData.familyName}
          </p>
          <p>{driversData.nationality}</p>
          <p>{driversData.dateOfBirth}</p>
          <a href={driversData.url}>Wikipedia </a>
        </div>
      ))}
    </div>
  );
};

export default Drivers;
