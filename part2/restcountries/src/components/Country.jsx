const Country = ({country}) => {
    const languages = country.map((c) => c.languages)
    const valueLanguages = []

    languages.forEach(element => {
        const language = Object.values(element)
        valueLanguages.push(...language)
    })

    return (
        <>
            <h2>{country.map((c) => c.name.common)}</h2>
            <br />
            <p>capital {country.map((c) => c.capital)}</p>
            <p>area {country.map((c) => c.area)}</p>
            <br />
            <h3>languages</h3>
            <ul>
                {valueLanguages.map((l) =>
                    <li key={l}>
                        {l}
                    </li> 
                )}
            </ul>
            <img alt={`${country.map((c) => c.name.common)} flag`} src={country.map((c) => c.flags.png)} />
        </>

    )
} 
export default Country