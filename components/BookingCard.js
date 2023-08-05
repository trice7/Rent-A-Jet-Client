/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { getSingleFlight } from '../api/flightData';
import { useAuth } from '../utils/context/authContext';

const BookingCard = ({ obj }) => {
  const { user } = useAuth();
  const [flight, setFlight] = useState({});
  useEffect(() => {
    getSingleFlight(obj.flightId).then(setFlight);
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.displayName} flying from {flight ? flight.name : 'error'}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">(CustomerId) departing on flight (flightId)</Card.Subtitle> */}
        <Card.Text>
          Departure Date: {obj.date}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted"> Payment: {obj.paymentMethod} </Card.Subtitle>
        <Button variant="primary">Edit Flight</Button>
        <Button variant="danger">Cancel Flight</Button>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;

BookingCard.propTypes = {
  obj: {
    flightId: PropTypes.string,
    date: PropTypes.string,
  }.isRequired,
};
