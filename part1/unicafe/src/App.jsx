import { useState } from 'react'

const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100
  return (
    <div>
    <h2>statistics</h2>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>total {total} </div>
    <div>average { average }</div>
    <div>positive { positive }%</div>
  </div>
  )
}
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
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
