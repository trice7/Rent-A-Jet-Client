/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import FlightCard from '../components/FlightCard';
import { getFlightsByDeparture } from '../api/flightData';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlightsByDeparture(user.home_airport.id).then(setFlights);
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      // style={{
      //   height: '90vh',
      //   padding: '30px',
      //   maxWidth: '400px',
      //   margin: '0 auto',
      // }}
    >
      <h1 className="raj-text card-space">Hello {user.first_name} {user.last_name} </h1>
      <h4 className="raj-text">Browse flights departing from your home airport:</h4>
      <div className="d-flex">
        {flights ? flights.map((flight) => (
          <FlightCard key={flight.id} name={flight.name} obj={flight} departureAirportId={flight.departure_airport_id.id} destinationAirportId={flight.destination_airport_id.id} price={flight.price} />
        )) : 'No flights retrieved'}
      </div>
    </div>
  );
}

export default Home;
