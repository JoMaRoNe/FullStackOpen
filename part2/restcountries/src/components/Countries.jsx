import Country from './Country'

const Countries = ({countries, search}) => {

    const countriesToShow = search
    ? countries.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()))
    : countries.map((c) => {c.name.common})

    if (countriesToShow.length > 10) {
        return <p>Too many matches, specify another filter</p>
    
    } else if (countriesToShow.length === 1 ) {
        return (
            <Country country={countriesToShow} />
        )
    
    } else {
        return (
            <div>
                {countriesToShow.map((c) =>  
                    <p key={c.name.common}>
                        {c.name.common}
                    </p>
                )}
            </div>
        )
    }
}

export default Countries