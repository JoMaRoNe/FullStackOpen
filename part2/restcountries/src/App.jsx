import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryService from './services/countries'

function App() {
  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(initalCountries => {
        setCountries(initalCountries)
      })
    }, [])
  
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const handleClick = (country) => {
    setNewSearch(country)
  }

  return (
    <>
      <Filter search={newSearch} handle={handleSearchChange} />
      <Countries countries={countries} search={newSearch} handle={handleClick} />
    </>
  )
}

export default App
