import { useState } from 'react'

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

const Div = ({points, selected}) => <div>Has {points[selected]} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const rnd = Math.floor(Math.random()* anecdotes.length)

  const [selected, setSelected] = useState(0)

  const [points, setPoint] = useState([0, 0, 0, 0, 0, 0, 0, 0])
 
  const onVotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoint(copy)
  }  

  const mostVoted = ({points}) => {
    const most = [...points]
    most.sort((a,b) => a - b)
    const ind = points.indexOf(most[most.length - 1])
    return (
      ind
    )
  }
  
  const most = mostVoted({points})

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <Div points={points} selected={selected} />
      <Button onSmash={onVotes} text='Vote' />
      <Button onSmash={() => setSelected(rnd)} text='Next anecdote' />
      <h2>Anecdote with most votes</h2>
      {anecdotes[most]}
      <Div points={points} selected={most} />
    </div>
  )
}

export default App