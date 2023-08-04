/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSingleAirport } from '../api/airportData';

const FlightCard = ({ obj }) => {
  console.warn('On the flight card page');
  const [departingAirport, setDepartingAirport] = useState({});
  const [arrivalAirport, setArrivalAirport] = useState({});
  useEffect(() => {
    getSingleAirport(obj.departureAirportId).then(setDepartingAirport);
    getSingleAirport(obj.destinationAirportId).then(setArrivalAirport);
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Departing From: {departingAirport ? departingAirport.city : 'Error'}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Headed To: {arrivalAirport ? arrivalAirport.city : 'error'}</Card.Subtitle>
        <Card.Text>
          Price per seat: ${obj.price}
        </Card.Text>
        <Link href="/bookings/new" passHref>
          <Button variant="primary">Book Flight</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FlightCard;

FlightCard.propTypes = {
  obj: {
    name: PropTypes.string,
    price: PropTypes.string,
  }.isRequired,
};
