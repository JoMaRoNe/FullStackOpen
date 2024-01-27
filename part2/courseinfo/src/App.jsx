
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}

/*
const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises} />
      <Part name = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises} />
      <Part name = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number de exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React', 
      exercises: 10 
    },
    { 
      name: 'Using props to pass data', 
      exercises: 7
    },
    { 
      name: 'State of component', 
      exercises: 14
    }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}
*/
export default App
