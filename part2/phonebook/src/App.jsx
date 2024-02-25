import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initalPersons => {
        setPersons(initalPersons)
      })
  }, [])

  const addPerson = (event) => {
      event.preventDefault ()
      const personObject = {
        name: newName,
        number: newNumber
      }

      const changePerson = (id) => {
        const person = persons.find(p => p.id === id)
        const changedPerson = { ...person, number: newNumber }
        personService
        .update(id,changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id === id ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
        }) 
      }

      persons.some(person => person.name === newName)
        ? window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)
          ? changePerson(persons.find(person => person.name === newName).id)
          : console.log('Cancelled')
        : personService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
            })
  }

  const removePerson = (id) => {
      personService.remove(id)
      setPersons(persons.filter((p) => p.id != id))
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

  const handleClick = (name, id) => {
    const r = window.confirm(`Delete ${name}?`)
        ? removePerson(id)
        : console.log("cancelled")
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
      <Persons persons={persons} search={newSearch} handle={handleClick}/>
    </div>
  )
}

export default App