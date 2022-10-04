// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getDrivers } from '../../Redux/driversReducers';
import imagesPool from './driverimg';
import options from './years';

import './Drivers.css';

// const fefe = 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/jcr:content/image.img.2048.medium.jpg/1646750995556.jpg';

const Drivers = () => {
  const dispatch = useDispatch();
  const driversData = useSelector((state) => state.driver);
  useEffect(() => {
    if (!driversData.length) {
      dispatch(getDrivers());
    }
  });
  const [value, setValue] = useState('2022');
  const handleSelect = (e) => {
    setValue(e.target.value);
    dispatch(getDrivers(e.target.value));
  };
  return (
    <>
      <div className="driverslist">
        <h3>Pilot&apos;s list by year:</h3>
        <select value={value} onChange={handleSelect} className="yearsel">
          {options.map(
            (option) => (
              <option key={nanoid()} value={option.value}>
                {option.value}
              </option>
            ),
          )}
        </select>
      </div>
      <div className="gege">
        {driversData.map((driversData, index) => (
          <div key={driversData.driverId} className="eachDriver">
            <h6>{driversData.givenName}</h6>
            <h2>{driversData.familyName}</h2>
            {value === '2022' && (
              <img
                key={imagesPool[index]}
                src={imagesPool[index]}
                alt={imagesPool[index]}
              />
            )}
            <p>
              <span>Nationality: </span>
              {driversData.nationality}
            </p>
            <p>
              Birthday:
              {driversData.dateOfBirth}
            </p>
            <a href={driversData.url}>
              {driversData.familyName}
              &apos;s Wikipedia
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Drivers;
