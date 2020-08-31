import React from 'react';

const Details = ({ details }) => {
  return (
    <div>
      <h1 className='welcome'>{ details.model }</h1>
      <h4 className='welcome'><a href={ `#`}>Back to Dealership</a></h4>
      <table className='details-table'>
        <tr>
          <td className='category'>Manufacturer:</td>
          <td className='detail'>{ details.manufacturer }</td>
        </tr>
        <tr>
          <td className='category'>Type:</td>
          <td className='detail'>{ details.type }</td>
        </tr>
        <tr>
          <td className='category'>Color:</td>
          <td className='detail'>{ details.color }</td>
        </tr>
      </table>
    </div>
  )
}

export default Details;
