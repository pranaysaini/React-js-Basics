import { useState } from 'react'
import './App.css'
import Objects from './Object.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Objects />
    </>
  );
}

export default App
