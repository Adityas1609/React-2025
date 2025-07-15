import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15)
  const addvalue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("clicked", counter);

  }

  const removeValue = () => {
    setCounter(counter-1)
  }


  return (
    <>
      <h1>Counter React</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addvalue}>add value :{counter} </button>
      <br />
      <button onClick={removeValue} >remove value : {counter} </button>
      <p>this is main couter value : {counter} </p>
    </>
  )
}

export default App
