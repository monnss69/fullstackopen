import React from 'react'

const Persons = ({ searchData }) => {
  return (
    <div>
        {searchData.map(person => 
          <p key={person.name}>{person.name} {person.number}</p>
        )}
    </div>
  )
}

export default Persons