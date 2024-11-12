import React from 'react'

const CountryDetail = ({ country, weather }) => {
  return (
    <div>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>

        <h3>Languages</h3>
        <ul>
            {Object.values(country.languages).map(language => 
                <li key={language}>{language}</li>
            )}
        </ul>

        <img src={country.flags.png} alt={country.name.common} style={{width: '100px'}}/>
        
        <h2>Weather in {country.capital[0]}</h2>
        {weather ? (
          <div>
            <div>Temperature: {(weather.main.temp - 273.15).toFixed(1)} Celcius</div>
            <img 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
              alt={weather.weather[0].description}
            />
            <div>Wind: {weather.wind.speed} m/s</div>
          </div>
        ) : (
          <div>Loading weather data...</div>
        )}
    </div>
  )
}

export default CountryDetail