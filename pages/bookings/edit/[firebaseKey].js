import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleBooking } from '../../../api/flightData';
import FlightBookingForm from '../../../components/form/FlightBookingForm';

const EditBooking = () => {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleBooking(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: change obj to the prop used in the form once the form is completed
  return (<FlightBookingForm existingBooking={editItem} />);
};

export default EditBooking;
