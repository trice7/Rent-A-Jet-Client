import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllAirports = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/airports.json?orderBy="uid"&equalTo="${uid}"`, {
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

const getSingleAirport = (airportId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/airports/${airportId}.json`, {
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
  getAllAirports,
  getSingleAirport,
};
