import { useState } from 'react'
import './App.css'
import Arrays from './Arrays.jsx'
import Objects from './Objects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Arrays />
     <Objects />
    </>
  )
}

export default App
