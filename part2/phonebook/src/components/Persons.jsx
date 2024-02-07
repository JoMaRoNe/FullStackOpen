import Person from "./Person"

const Persons = ({persons, search}) => {
    
    const personsToShow = search
    ? persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : persons
    
    return (
        <div>
        {personsToShow.map(person => 
        <Person key={person.name}  person={person}/>
        )}
        </div>
    )
}

export default Persons