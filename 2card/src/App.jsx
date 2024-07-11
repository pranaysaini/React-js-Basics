import { useState } from 'react'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
      
      
    </>
  );
}

export default App
