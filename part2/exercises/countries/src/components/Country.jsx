import React from 'react'

const Country = ({ country, handleClicked }) => {
  return (
    <div>
        {country.name.common} <button onClick={() => handleClicked(country)}>show</button>
    </div>
  )
}

export default Country