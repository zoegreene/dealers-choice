import React from 'react';

const Details = ({ car }) => {
  return (
    <div>
      <h1>{ car.model }</h1>
      <h5>Manufacturer: { car.manufacturer }</h5>
      <h5>Type: { car.type }</h5>
      <h5>Color: { car.color }</h5>
    </div>
  )
}

export default Details;
