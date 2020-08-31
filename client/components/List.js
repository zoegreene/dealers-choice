import React from 'react';

const List = ({ cars }) => {
  return (
    cars.map(car => {
      return (
        <div className='single-car' key={ car.id }><a href={ `#${ car.id }`}>{ car.model }</a></div>
      )
    })
  )
}

export default List;

