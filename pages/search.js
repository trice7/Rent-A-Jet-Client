/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import FlightCard from '../components/FlightCard';
import { getAllFlights, getFlightsByDeparture } from '../api/flightData';
import AirportSelection from '../components/form/AirportSelect';
import { getAllAirports } from '../api/airportData';

function SearchFlights() {
  const [flights, setFlights] = useState([]);
  const [airports, setAirports] = useState([]);
  const [formSelect, setFormSelect] = useState({
    departureAirport: '',
  });

  const getDepartureFlights = (form) => {
    getFlightsByDeparture(form.departureAirport).then(setFlights);
  };

  useEffect(() => {
    getAllAirports().then((data) => setAirports(data));
    if (formSelect.departureAirport === 'none') {
      getAllFlights().then(setFlights);
    } else if (formSelect.departureAirport) {
      getDepartureFlights(formSelect);
    } else {
      getAllFlights().then(setFlights);
    }
  }, [formSelect.departureAirport]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className="raj-text card-space">Search Flights to Book: </h1>
      <div className="selection-container">
        <Form>
          <FloatingLabel controlId="floatingInput1" label="Departure Airport" className="mb-3">
            <Form.Select aria-label="Select Airport" required name="departureAirport" onChange={handleChange}>
              <option value="none">All Flights</option>
              {airports.map((airport) => (<AirportSelection key={airport.id} id={airport.id} city={airport.city} code={airport.code} />))}
            </Form.Select>
          </FloatingLabel>
        </Form>
      </div>
      <div
        className="text-center d-flex flex-row flex-wrap justify-content-center align-content-center"
      >
        {flights ? flights.map((flight) => (
          <FlightCard key={flight.id} name={flight.name} obj={flight} departureAirportId={flight.departure_airport_id.id} destinationAirportId={flight.destination_airport_id.id} price={flight.price} />
        )) : 'No flights retrieved'}
      </div>
    </div>
  );
}

export default SearchFlights;
