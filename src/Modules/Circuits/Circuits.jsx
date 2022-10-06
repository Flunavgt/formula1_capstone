import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getCircuits } from '../../Redux/CircuitsReducers';
import imagesPool2 from './circuitImg';
import './circuit.css';

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
        <Card style={{ width: '20rem' }} key={circuitsData.circuitId}>
          <Card.Title>
            {circuitsData.circuitName}
          </Card.Title>
          <div>
            <Card.Img
              variant="top"
              key={imagesPool2[index]}
              src={imagesPool2[index]}
              alt={imagesPool2[index]}
            />
          </div>
          <Card.Text>
            <span>Location: </span>
            <span>
              {circuitsData.Location.locality}
              ,
            </span>
            <span>{circuitsData.Location.country}</span>
          </Card.Text>
          <Card.Link href={circuitsData.url}> Circuit&apos;s Wikipedia </Card.Link>
        </Card>
      ))}
    </div>
  );
};

export default Circuits;
