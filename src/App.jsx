import { useState } from 'react'  //hooks useState
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)

  const addValue=()=>{
    // counter=counter+1
    // // console.log(Math.random());
    // console.log(counter);
    if(counter<20)
    setCounter(counter+1)
  }
  const remValue=()=>{
    if(counter>0)setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value: {counter}</button>
      <button
      onClick={remValue}
      >Remove value: {counter}</button>
    </>
  )
}

export default App