/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSingleAirport } from '../api/airportData';

const FlightCard = ({
  obj, departureAirportId, destinationAirportId, name, price,
}) => {
  const [departingAirport, setDepartingAirport] = useState({});
  const [arrivalAirport, setArrivalAirport] = useState({});
  useEffect(() => {
    getSingleAirport(departureAirportId).then(setDepartingAirport);
    getSingleAirport(destinationAirportId).then(setArrivalAirport);
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Departing From: {departingAirport ? departingAirport.city : 'Error'}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Headed To: {arrivalAirport ? arrivalAirport.city : 'error'}</Card.Subtitle>
        <Card.Text>
          Price per seat: ${price}
        </Card.Text>
        <Link href={{ pathname: '/bookings/new', query: { flightId: obj.id } }} passHref>
          <Button variant="primary">Book Flight</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FlightCard;

FlightCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    departureAirportId: PropTypes.string,
    destinationAirportId: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  departureAirportId: PropTypes.number.isRequired,
  destinationAirportId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
