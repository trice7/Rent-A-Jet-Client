import { Button, Card } from 'react-bootstrap';

const BookingCard = () => {
  console.warn('on Booking page');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>(Booking Card Title) Flight 211 to Kansas City</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">(CustomerId) departing on flight (flightId)</Card.Subtitle>
        <Card.Text>
          Departure Date: 11/21/23 @ 2:30PM
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted"> Payment: Master Card xxxx-xxxx-xxxx-1234 </Card.Subtitle>
        <Button variant="primary">Edit Flight</Button>
        <Button variant="danger">Cancel Flight</Button>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;
