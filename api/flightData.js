import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllFlights = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flights.json`, {
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

const getSingleFlight = (flightId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flights/${flightId}.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createFlightBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateFlightBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${payload.id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteFlightBooking = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleBooking = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${id}.json`, {
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
  getAllFlights,
  getSingleFlight,
  updateFlightBooking,
  deleteFlightBooking,
  createFlightBooking,
  getSingleBooking,
};
