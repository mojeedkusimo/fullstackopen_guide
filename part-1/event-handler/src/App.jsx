import { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);

  const decrease = () => setCounter(counter - 1);


  console.log('rendering...', counter)
  return (
    <>
      <div>{counter}</div>
      <button onClick={increase}>
        plus
      </button>

      <button onClick={decrease}>
        minus
      </button>
      {/* <button onClick={setCounter(counter + 1)}>
        plus
      </button> */}
    </>
  )
}

export default App