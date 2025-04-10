import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const decreaseByOne = () => setCounter(counter - 1);

  const setZero = () => setCounter(0);

  console.log('rendering...', counter);
  return (
    <>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text={'plus'}
      />
      <Button
        onClick={decreaseByOne}
        text={'minus'}
      />
      <Button
        onClick={setZero}
        text={'zero'}
      />
    </>
  )
}

export default App