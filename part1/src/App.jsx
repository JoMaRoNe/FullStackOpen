const App = () => {
  const friends = [
    { name: 'Pedro', age: 4 },
    { name: 'Maya', age: 10 }
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App
/*const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hola {props.name}, tienes {props.age} años
      </p>
    </div>
  )
}
const App = () => {
  const name = 'Pedro'
  const age = 23
  return (
    <div>
      <p>Saludos</p>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
*/
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/