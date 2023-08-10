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

const getUserFlightBookings = (uid, searchTerm = null) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flight_bookings?customer_id=${uid}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const result = Object.values(data);
        if (searchTerm) {
          const filteredResult = result.filter((b) => b.flight_id.departure_airport_id.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            || b.flight_id.departure_airport_id.code.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            || b.flight_id.destination_airport_id.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            || b.flight_id.destination_airport_id.code.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
          resolve(filteredResult);
        } else {
          resolve(result);
        }
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
