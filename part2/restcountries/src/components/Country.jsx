import { useState,useEffect } from 'react'
import weatherService from '../services/countries'
import Weather from "./Weather"

const Country = ({country}) => {
    const [weather, setWeather] = useState([])

    const nameCountry = country.map((c) => c.name.common)
    const capital = country.map((c) => c.capital)
    const area = country.map((c) => c.area)
    const flag = country.map((c) => c.flags.png)
    
    const languages = country.map((c) => c.languages)
    const valueLanguages = []

    languages.forEach(element => {
        const language = Object.values(element)
        valueLanguages.push(...language)
    })

    useEffect(() => { 
        weatherService
            .getWeather2(capital)
            .then(weatherData => {
                setWeather(weatherData)
            })
    },[])

    return (
        <>
            <h2>{nameCountry}</h2>
            <br />
            <p>capital {capital}</p>
            <p>area {area}</p>
            <br />
            <h3>languages</h3>
            <ul>
                {valueLanguages.map((l) =>
                    <li key={l}>
                        {l}
                    </li> 
                )}
            </ul>
            <img alt={`${nameCountry} flag`} src={flag} />
            <Weather weather={weather} />
        </>
    )
} 
export default Country