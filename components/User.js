import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h2>{userObj.name}</h2>
        <p className="card-text bold">{userObj.email}</p>
        <p className="card-text bold">{userObj.last_login}</p>
        <img src={userObj.image} alt="" />
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    last_login: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default UserCard;
