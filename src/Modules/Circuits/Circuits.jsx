import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCircuits } from '../../Redux/CircuitsReducers';
import { imagesPool2 } from './circuitImg';
// const bahrain = 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/7col/image.png';

// const imagesPool2 = [
//   'images/circuits/albert_park.png',
//   'images/circuits/americas.png',
//   'images/circuits/bahrain.png',
//   'images/circuits/baku.png',
//   'images/circuits/catalunya.png',
//   'images/circuits/hungaroring.png',
//   'images/circuits/imola.png',
//   'images/circuits/interlagos.png',
//   'images/circuits/jeddah.png',
//   'images/circuits/marinabay.png',
//   'images/circuits/miami.png',
//   'images/circuits/monaco.png',
//   'images/circuits/monza.png',
//   'images/circuits/red_bull_ring.png',
//   'images/circuits/ricard.png',
//   'images/circuits/rodriguez.png',
//   'images/circuits/silverstone.png',
//   'images/circuits/spa.png',
//   'images/circuits/suzuka.png',
//   'images/circuits/villeneuve.png',
//   'images/circuits/yas_marina.png',
//   'images/circuits/zandvoort.png',
// ];

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
