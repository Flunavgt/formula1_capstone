import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { getDrivers } from '../../Redux/driversReducers';
import imagesPool from './driverimg';
import options from './years';

import './Drivers.css';

const Drivernew = (props) => {
  const { dato } = props;
  const dispatch = useDispatch();
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
        {dato.map((data, index) => (
          <Link to="/Details" style={{ textDecoration: 'none' }} key={data.driverId} state={{ state: data }}>
            <div className="eachDriver">
              <h6>{data.givenName}</h6>
              <h2>{data.familyName}</h2>
              {value === '2022' && (
                <img
                  key={imagesPool[index]}
                  src={imagesPool[index]}
                  alt={imagesPool[index]}
                />
              )}
              <p>
                Nationality:
                <span className="infoDr">{data.nationality}</span>
              </p>
              <p>
                Birthday:
                <span className="infoDr">{data.dateOfBirth}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

Drivernew.propTypes = {
  dato: PropTypes.arrayOf(PropTypes.shape({
    driverId: PropTypes.node,
    givenName: PropTypes.node,
    familyName: PropTypes.node,
    nationality: PropTypes.node,
    dateOfBirth: PropTypes.node,
    url: PropTypes.node,
    map: PropTypes.node,
  })).isRequired,
};

const Drivers = () => {
  const dispatch = useDispatch();
  const driversData = useSelector((state) => state.driver);
  useEffect(() => {
    if (!driversData.length) {
      dispatch(getDrivers());
    }
  });
  return (
    <>
      <Drivernew dato={driversData} />
    </>
  );
};

export default Drivers;
