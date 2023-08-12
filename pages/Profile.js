/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import UserCard from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { getUserFlightBookings } from '../api/mergeData';
import BookingCard from '../components/BookingCard';

export default function Profile() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    searchTerm: '',
  });

  const userFlightBookings = (searchTerm) => {
    getUserFlightBookings(user.id, searchTerm).then(setBookings);
  };

  useEffect(() => {
    if (formData.searchTerm) {
      userFlightBookings(formData.searchTerm);
    } else {
      userFlightBookings();
    }
  }, [formData.searchTerm]);

  return (
    <div className="text-center raj-container">
      <UserCard userObj={user} />
      <Form.Text className="raj-text text-white card-space">Search by City or Airport code:</Form.Text>
      <Form.Control as="textarea" name="searchTerm" required placeholder="Enter arrival or departure city/airport code" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
      <div className="column-card">
        {bookings?.map((card) => (
          <BookingCard key={card.id} obj={card} paymentMethod={card.payment_method} flightname={card.flight_id.name} date={card.date} onUpdate={userFlightBookings} cost={card.flight_id.price} />
        ))}
      </div>
    </div>
  );
}
