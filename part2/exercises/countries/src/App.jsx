import { useState, useEffect } from 'react'
import Country from './components/Country'
import CountryDetail from './components/CountryDetail'
import countryServices from './services/countryServices'

function App() {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryServices
      .getCountry(search)
      .then(countries => setCountries(countries))
  }, [countries])

  useEffect(() => {
    if (countries.length === 1) {
      countryServices
        .getCapitalWeather(countries[0])
        .then(weather => setWeather(weather))
    }
  }, [countries])

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleClicked = (country) => {
    setSearch(country.name.common)
  }

  return (
    <div>
      find countries <input value={search} onChange={handleSearch}/>
      {countries.length > 10 
        ? <div>Too many matches, specify another filter</div>
        : countries.length === 1
        ? <CountryDetail country={countries[0]} weather={weather}/>
        : countries.map(country => 
          <Country country={country} handleClicked={handleClicked} key={country.cca3}/>
        )
      }
    </div>
  )
}

export default App
