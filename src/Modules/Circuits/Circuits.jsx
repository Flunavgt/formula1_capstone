import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCircuits } from '../../Redux/CircuitsReducers';
import imagesPool2 from './circuitImg';
import './circuit.css';
// const bahrain = 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/7col/image.png';

const Circuits = () => {
  const dispatch = useDispatch();
  const circuitsData = useSelector((state) => state.circuit);
  useEffect(() => {
    if (!circuitsData.length) {
      dispatch(getCircuits());
    }
  });
  return (
    <div className="circuitslist">
      {circuitsData.map((circuitsData, index) => (
        <div key={circuitsData.circuitId}>
          <div>
            <img
              key={imagesPool2[index]}
              src={imagesPool2[index]}
              alt={imagesPool2[index]}
            />
          </div>
          <p>
            {circuitsData.circuitName}
          </p>
          <p>
            {circuitsData.Location.locality}
            {circuitsData.Location.country}
          </p>
          <a href={circuitsData.url}>Wikipedia </a>
        </div>
      ))}
    </div>
  );
};

export default Circuits;
