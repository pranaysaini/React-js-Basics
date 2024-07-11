import { useState } from 'react'
import './App.css'
import ComponentA from './ComponentA.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ComponentA />
    </>
  )
}

export default App
