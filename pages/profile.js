/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import UserCard from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { getUserFlightBookings } from '../api/mergeData';
import BookingCard from '../components/BookingCard';

export default function Profile() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getUserFlightBookings(user.uid).then(setBookings);
  }, []);

  console.warn(bookings);
  const profileUser = {
    name: user.displayName,
    email: user.email,
    last_login: user.metadata.lastSignInTime,
    image: user.photoURL,
  };

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <UserCard userObj={profileUser} />

        {bookings?.map((card) => (
          <BookingCard key={card.id} obj={card} />
        ))}
      </div>
    </div>
  );
}
