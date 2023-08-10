import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import {
  getAllFlights,
  createFlightBooking,
  updateFlightBooking,
  getSingleFlight,
} from '../../api/flightData';

const initialState = {
  id: 0,
  customerId: 0,
  flightId: 0,
  date: '',
  paymentMethod: '',
  price: '',
};

function FlightBookingForm({ existingBooking }) {
  const [formInput, setFormInput] = useState(initialState);
  const [flights, setFlights] = useState([]);
  const router = useRouter();
  const [priceHandler, setPriceHandler] = useState(30000);
  // https://stackoverflow.com/questions/43862600/how-can-i-get-query-string-parameters-from-the-url-in-next-js
  if (router.query) {
    initialState.flightId = router.query.flightId;
  }
  const { user } = useAuth();

  useEffect(() => {
    getAllFlights().then(setFlights);
    if (existingBooking.id) {
      setFormInput({
        id: existingBooking.id,
        customerId: existingBooking.customer_id.id,
        flightId: existingBooking.flight_id.id,
        date: existingBooking.date,
        paymentMethod: existingBooking.payment_method,
        price: existingBooking.price,
      });
    }
  }, [existingBooking, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingBooking.id) {
      console.warn(formInput);
      updateFlightBooking(formInput).then(() => router.push('/Profile'));
    } else {
      const payload = { ...formInput, customerId: user.id };
      createFlightBooking(payload).then(
        router.push('/Profile'),
      );
    }
  };

  const handlePriceChange = (e) => {
    e.preventDefault();
    // handleChange(e);
    getSingleFlight(e.target.value).then((obj) => {
      setPriceHandler(obj.price);
      handleChange(e);
      console.warn(priceHandler);
    });
    // const select = e.target.value.price;
    // setPriceHandler(select);
    // handleChange(e);
  };

  return (

    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{existingBooking.id ? 'Update' : 'Create'} Booking</h2>
      <FloatingLabel controlId="floatingInput1" label="Flight Name" className="mb-3">
        <Form.Select
          aria-label="Flight Name"
          name="flightId"
          onChange={handlePriceChange}
          className="mb-3"
          value={formInput.flightId}
          required
        >
          <option value="">Select a Flight</option>
          {
            flights.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* date  */}
      <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
        <Form.Control
          type="date"
          placeholder="Enter Date"
          name="date"
          value={formInput.date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Payment Method">
        <Form.Select
          aria-label="Payment Method"
          name="paymentMethod"
          onChange={handleChange}
          className="mb-3"
          value={formInput.paymentMethod}
          required
        >
          <option value="">Select a Payment Method</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
        </Form.Select>
      </FloatingLabel>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Price
        </Form.Label>
        <Col sm="10">
          <Form.Control name="price" plaintext readOnly defaultValue="0" value={priceHandler} />
        </Col>
      </Form.Group>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{existingBooking.id ? 'Update' : 'Create'} Booking</Button>
    </Form>
  );
}

FlightBookingForm.propTypes = {
  existingBooking: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    payment_method: PropTypes.string,
    price: PropTypes.number,
    flight_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    customer_id: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

FlightBookingForm.defaultProps = {
  existingBooking: initialState,
};

export default FlightBookingForm;
