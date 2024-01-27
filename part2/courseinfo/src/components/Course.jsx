const Course = ({courses}) => {

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map((course,i) => (
                <div key={i}>
                    <h2 index={i}>{course.name}</h2>
                    {course.parts.map((part,i) => (
                        <p key={i}>{part.name} {part.exercises}</p>
                    ))}
                    <p><strong>total of {course.parts.reduce((sum,part) => sum + part.exercises ,0)} exercises.</strong></p>
                </div>
            ))}  
        </div>
    )
}

export default Course