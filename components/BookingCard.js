/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { deleteFlightBooking } from '../api/flightData';
import { useAuth } from '../utils/context/authContext';

const BookingCard = ({
  obj, onUpdate, paymentMethod, flightname, date, cost,
}) => {
  const { user } = useAuth();
  // const [flight, setFlight] = useState({});

  const deleteThisBooking = () => {
    if (window.confirm('Delete this booking? This is irreversible.')) {
      deleteFlightBooking(obj.id).then(() => onUpdate());
    }
  };

  // useEffect(() => {
  //   getSingleFlight(obj.flightId).then(setFlight);
  // }, []);

  return (
    <Card className="card-space" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="nav-text">{user.first_name} {user.last_name} flying from {flightname}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">(CustomerId) departing on flight (flightId)</Card.Subtitle> */}
        <Card.Text>
          Departure Date: {date}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted"> Payment: ${cost} using {paymentMethod} </Card.Subtitle>
        <Link href={`/bookings/edit/${obj.id}`} passHref>
          <Button variant="dark" className="btn-outline-light">Edit Booking</Button>
        </Link>

        <Button variant="light" className="btn btn-outline-danger" onClick={deleteThisBooking}>Cancel Flight</Button>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;

BookingCard.propTypes = {
  obj: PropTypes.shape({
    flightId: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    paymentMethod: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  flightname: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};
