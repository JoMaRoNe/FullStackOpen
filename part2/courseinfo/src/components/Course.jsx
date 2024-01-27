const Course = ({course}) => {
    const total =course.parts.reduce((sum,part) => sum + part.exercises ,0)
    return (
        <div>
            <h1>{course.name}</h1>        
            {course.parts.map((part,i) => (
                <p key={i}>{part.name} {part.exercises}</p>
            ))}
            <p>total of {total} exercises.</p>
        </div>
    )
}

export default Course