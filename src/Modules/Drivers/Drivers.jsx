// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../Redux/driversReducers';
// import albon from '../../app/Resources/Drivers/albon_front.png';

const fefe = 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/jcr:content/image.img.2048.medium.jpg/1646750995556.jpg';

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
      {driversData.map((driversData) => (
        <div key={driversData.driverId}>
          <img src={fefe} alt="Albon" />
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
