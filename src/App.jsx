import { useState } from 'react'
import './App.css'

function App() {

  const [count,setcount]=useState(0)

  const increment = () =>{
    setcount(count+1)
  };
  const decrement = () =>{
    setcount(count-1)
  };
 

  return (
    <>

    <h1>This is a counter:{count}</h1>
    <div>
      <button onClick={increment}>Click me to increase the value</button>
      <br>
      </br>
      <hr></hr>
      <button onClick={decrement}>click me to decrease the value</button>
    </div>   
    </>
  )
}

export default App
