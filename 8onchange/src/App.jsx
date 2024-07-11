import { useState } from 'react'
import './App.css'
import OnChangeEvent from './OnChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OnChangeEvent />
    </>
  )
}

export default App
