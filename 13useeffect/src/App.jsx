import { useState } from 'react'
import './App.css'
import MyComponent from './MyComponent.jsx'
import Window from './Window.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
      <Window />
    </>
  )
}

export default App
