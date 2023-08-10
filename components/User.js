/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h2>{userObj.first_name} {userObj.last_name} </h2>
        <p className="card-text bold">{userObj.email}</p>
        <p className="card-text bold">{userObj.phone_number}</p>
        <p className="card-text bold">Home Airport: {userObj.home_airport.city} ({userObj.home_airport.code})</p>
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
    phone_number: PropTypes.number,
    home_airport: PropTypes.shape,
  }).isRequired,
};

export default UserCard;
