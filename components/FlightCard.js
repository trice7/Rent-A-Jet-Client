import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const FlightCard = () => {
  console.warn('On the flight card page');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Flight 291 to Kansas City</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Departing From: Nashville, TN</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Headed To: Kansas City, MO</Card.Subtitle>
        <Card.Text>
          Price per seat: $236.99
        </Card.Text>
        <Link href="/bookings/new" passHref>
          <Button variant="primary">Book Flight</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FlightCard;
