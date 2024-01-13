const Hello = (props) => {
  return (
    <div>
      <p>
        Hola {props.name}, tienes {props.age} años.
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Pedro'
  const age = 10

  return (
    <div>
      <h1>Saludos</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}