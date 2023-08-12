/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <img style={{ maxWidth: '100px' }} className="card-space" src={userObj.profile_image} alt="Profile" />
        <h2 className="nav-text">{userObj.first_name} {userObj.last_name} </h2>
        <p className="card-text bold">Email: {userObj.email}</p>
        <p className="card-text bold">Phone: {userObj.phone_number}</p>
        <p className="card-text bold">Home Airport: {userObj.home_airport.city} ({userObj.home_airport.code})</p>
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
    phone_number: PropTypes.number,
    home_airport: PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
      code: PropTypes.string,
    }),
  }).isRequired,
};

export default UserCard;
