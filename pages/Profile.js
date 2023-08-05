import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.photoURL} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Button type="button" variant="danger" onClick={signOut}>Sign Out</Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
