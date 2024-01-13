import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('renderizando con valor de contador: ', counter)

  const increaseByOne = () => {
    console.log('incrementando, valor previo: ', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decrementando, valor previo: ', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('Reseteando a cero, valor previo: ', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button 
        handleClick={increaseByOne}
        text='Mas'
      />
      <Button 
        handleClick={setToZero}
        text='Reiniciar'
      />
      <Button 
        handleClick={decreaseByOne}
        text='Menos'
      />
    </div>
  )
}

export default App