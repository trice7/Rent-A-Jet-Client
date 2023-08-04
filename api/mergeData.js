import clientCredentials from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllFlightBookings = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flightBooking.json`, {
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
  fetch(`${endpoint}/flightBooking/${flightId}.json`, {
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
};
