/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import FlightCard from '../components/FlightCard';
import { getAllFlights } from '../api/flightData';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getAllFlights().then(setFlights);
  }, []);
  console.warn(flights);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.first_name}! </h1>
      {flights ? flights.map((card) => (
        <FlightCard key={card.id} obj={card} />
      )) : 'No flights retrieved'}
    </div>
  );
}

export default Home;
