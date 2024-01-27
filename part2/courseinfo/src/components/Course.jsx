const Course = ({course}) => {
    return (
        <div>
            <h1>{course.name}</h1>        
            {course.parts.map((part,i) => (
                <p key={i}>{part.name} {part.exercises}</p>
            ) )}
        </div>
    )
}

export default Course