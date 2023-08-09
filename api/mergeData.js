import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllFlightBookings = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getUserFlightBookings = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flight_bookings?customer_id=${uid}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleFlightBooking = (flightId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${flightId}.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllFlightBookings,
  getSingleFlightBooking,
  getUserFlightBookings,
};
