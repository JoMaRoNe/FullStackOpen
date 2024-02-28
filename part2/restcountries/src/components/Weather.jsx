const Weather = ({weather}) => {

    if (Object.values(weather).length > 0 ) {
 
        const { current: { temp_c, wind_kph, condition }, location: { name } } = weather;
        const {icon} = condition
 
        return (
            <div>
                <h2>Weather in {name}</h2>
                <p>temperature {temp_c}º Celcius</p>
                <img src={`http:${icon}`} />
                <p>wind {wind_kph} kph</p>
            </div>
        )
    } else {
        return null
    }
}

export default Weather