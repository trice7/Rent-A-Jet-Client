/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import UserCard from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { getUserFlightBookings } from '../api/mergeData';
import BookingCard from '../components/BookingCard';

export default function Profile() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const userFlights = () => {
    getUserFlightBookings(user.id).then(setBookings);
  };

  useEffect(() => {
    userFlights();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <UserCard userObj={user} />

        {bookings?.map((card) => (
          <BookingCard key={card.id} obj={card} paymentMethod={card.payment_method} flightname={card.flight_id.name} date={card.date} onUpdate={userFlights} cost={card.flight_id.price} />
        ))}
      </div>
    </div>
  );
}
