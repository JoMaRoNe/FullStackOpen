import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [ value, setValue ] = useState (10)
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

  const setToValue = (newValue) => () => {
      console.log('value now', newValue)
      setValue(newValue)
  }

  return (
    <div>
      <div border="10">
        <h1>Test hooks</h1>
        <button onClick={setToValue(1000)}>thousand</button>
        <Button onSmash={setToValue(0)} text='reset' />
        <Button onSmash={setToValue(value + 1)} text='incrementa' />
      </div>
      <div padding="40">
        <Display counter={counter} />
        <Button 
          onSmash={increaseByOne}
          text='Mas'
        />
        <Button 
          onSmash={setToZero}
          text='Reiniciar'
        />
        <Button 
          onSmash={decreaseByOne}
          text='Menos'
        />
      </div>
    </div>
  )
}

export default App