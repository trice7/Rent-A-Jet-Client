/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { deleteFlightBooking, getSingleFlight } from '../api/flightData';
import { useAuth } from '../utils/context/authContext';

const BookingCard = ({ obj, onUpdate }) => {
  const { user } = useAuth();
  const [flight, setFlight] = useState({});

  const deleteThisBooking = () => {
    if (window.confirm('Delete this booking? This is irreversible.')) {
      deleteFlightBooking(obj.id).then(() => onUpdate());
    }
  };

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
        <Link href={`/bookings/edit/${obj.id}`} passHref>
          <Button variant="primary">Edit Flight</Button>
        </Link>

        <Button variant="danger" onClick={deleteThisBooking}>Cancel Flight</Button>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;

BookingCard.propTypes = {
  obj: PropTypes.shape({
    flightId: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    paymentMethod: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
