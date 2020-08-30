import React from 'react';
import Details from './Details'

const List = ({ cars }) => {
  return (
    cars.map(car => {
      return (
        <li key={ car.id }>{ car.model }</li>
      )
    })
  )
}

export default List;

