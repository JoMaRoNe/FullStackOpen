import { useState } from 'react'

//const Display = ({counter, text}) => <div>{text} {counter}</div>

//const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Good</button>
      </div>
      <div>
        <h2>statistics</h2>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
      </div>
    </div>
  )
}

export default App
