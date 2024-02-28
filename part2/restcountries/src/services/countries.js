import axios from 'axios'

const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const weatherUrl2 = 'http://api.weatherapi.com/v1/current.json?q='

const api_key = import.meta.env.VITE_SOME_KEY
const api_key2 = import.meta.env.VITE_WEATHERAPI_KEY

const getAll = () => {
    const request = axios.get(allUrl)
    return request.then(response => response.data)
}

const getOne = (country) => {
    const request = axios.get(`${baseUrl}/${country}`)
    return request.then(response => response.data)
}

const getWeather = (capital) => {
    const request = axios.get(`${weatherUrl}${capital}&appid=${api_key}`)
    return request.then(response => response.data)
}

const getWeather2 = (city) => {
    const request = axios.get(`${weatherUrl2}${city}&key=${api_key2}`)
    return request.then(response => response.data)
}

export default { getAll, getOne, getWeather, getWeather2 }