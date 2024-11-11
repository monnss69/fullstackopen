import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';
const apiKey = import.meta.env.VITE_API_KEY;

const getCountry = (search) => {
  const request = axios.get(`${baseUrl}/all`);
  return request
    .then(response => response.data)
    .then(countries => countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())));
}

const getCapitalWeather = (country) => {
    const capitalInfo = country.capitalInfo.latlng;
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${capitalInfo[0]}&lon=${capitalInfo[1]}&appid=${apiKey}`);
    return request
        .then(response => response.data)
}

export default { getCountry, getCapitalWeather };