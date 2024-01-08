const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parte[0].part} exercise = {props.parte[0].exercise} />
      <Part part = {props.parte[1].part} exercise = {props.parte[1].exercise} />
      <Part part = {props.parte[2].part} exercise = {props.parte[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number de exercises {props.e1 + props.e2 + props.e3}</p>
    </div>
  )
}

const App = () => {
  const course= 'Half Stack application development'
  const parte = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7},
    { part: 'State of component', exercise: 14 }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parte = {parte} />
      <Total e1 = {parte[0].exercise} e2 = {parte[1].exercise} e3 = {parte[2].exercise} />
    </div>
  )
}

export default App
