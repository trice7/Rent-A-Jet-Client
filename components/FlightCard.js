import { Card, Button } from 'react-bootstrap';

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
        <Button variant="primary">Book Flight</Button>
      </Card.Body>
    </Card>
  );
};

export default FlightCard;
