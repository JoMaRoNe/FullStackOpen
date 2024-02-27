import Country from './Country'

const Countries = ({countries, search}) => {

    const countriesToShow = search
    ? countries.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()))
    : countries.map((c) => {c.name.common})

    if (countriesToShow.length > 10) {
        console.log(countriesToShow.length)
        return <p>Too many matches, specify another filter</p>
    
    } else if (countriesToShow.length === 1 ) {
        console.log(countriesToShow)
        return (
            <>
            <p>Only one country.</p>
            <Country country={countriesToShow} />
            </>
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

    /*return (
        <p>{() => countriesToShow.map((c) => {c.name.common})}</p>
    )*/
}

export default Countries