import { useState } from 'react'
import './App.css'
import DigitalClock from './digitalClock.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <DigitalClock />
      
    </>
  )
}

export default App
