import clientCredentials from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSingleUser = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/user/${userId}.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getSingleUser;
