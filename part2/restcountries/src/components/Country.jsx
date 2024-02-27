const Country = ({country}) => {
    //const country = country.map((c) => )
    return (
        <>
            <h2>{country.map((c) => c.name.common)}</h2>
            <br />
            <p>capital {country.map((c) => c.capital)}</p>
            <p>area {country.map((c) => c.area)}</p>
            <br />
            <h3>languages</h3>
            <ul>
                {country.map((c) => {
                    <li>
                        c.languages
                    </li> 
                    })
                }
            </ul>
            <img src={country.map((c) => c.flags.png)} />

        </>

    )
} 
export default Country