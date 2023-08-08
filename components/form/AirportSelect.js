import React from 'react';
import PropTypes from 'prop-types';

export default function AirportSelection({ id, city, code }) {
  return (
    <option key={`select--${id}`} value={id}>{code} : {city}</option>
  );
}

AirportSelection.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
};
