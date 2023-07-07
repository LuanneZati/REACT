import React from 'react'

const CarDetails = ({color, year}) => {
  return (
    <div>
        <h2>Car details</h2>
        <ul>
            <li>Cor: {color}</li>
            <li>Ano: {year}</li>
        </ul>
    </div>
    )
}

export default CarDetails