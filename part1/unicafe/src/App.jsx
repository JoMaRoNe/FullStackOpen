import { useState } from 'react'

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

const StatisticLine = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total * 100) + '%'

  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive} />
    </div>
  )
}

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button onSmash={() => setGood(good + 1)} text='Good' />
        <Button onSmash={() => setNeutral(neutral + 1)} text='Neutral'/>
        <Button onSmash={() => setBad(bad + 1)} text='Bad' />
      </div>
      <div>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App
