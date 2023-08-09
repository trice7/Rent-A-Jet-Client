/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h2>{userObj.first_name} {userObj.last_name} </h2>
        <p className="card-text bold">{userObj.email}</p>
        {/* <p className="card-text bold">{userObj.last_login}</p> */}
        <img style={{ maxWidth: '100px' }} src={userObj.profile_image} alt="" />
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    profile_image: PropTypes.string,
  }).isRequired,
};

export default UserCard;
