import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-123456',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchData, setSearchData] = useState(persons)

  const handleSearch = (event) => {
    if (event.target.value === '') {
      setSearchData(persons)
      return
    }
    const searchFilter = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearchData(searchFilter)
  }

  const alertName = () => {
    window.alert(`${newName} is already added to phonebook`)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addData = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName)
    
    if (nameExists) {
      alertName()
      setNewName('')
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
          
      setPersons(persons.concat(personObject))
      setSearchData(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch}/>
      <h3>Add new contact</h3>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addData={addData} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons searchData={searchData}/>
    </div>
  )
}

export default App