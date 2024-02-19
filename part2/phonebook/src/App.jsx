import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
      event.preventDefault ()
      
      persons.some(person => person.name === newName)
        ? alert(`${newName} is already added to phonebook`)
        : setPersons(persons.concat({name:newName, number:newNumber}))
      
      setNewName('')
      setNewNumber('')
  }

  const handlePersonChange = (event) => {
      setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }
  const [newSearch,setNewSearch] = useState('')
  
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} handle={handleSearchChange} />
      <h3>add a new</h3>
      <PersonForm 
        add={addPerson}
        name={newName}
        handleP={handlePersonChange}
        number={newNumber}
        handleN={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={newSearch}/>
    </div>
  )
}

export default App