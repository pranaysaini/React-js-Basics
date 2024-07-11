import { useState } from 'react'
import './App.css'
import Student from './Student.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Sponjbob" age={25} isStudent={true} />
      <Student name="Patrik" age={30} isStudent={true} />
      <Student name="Squidward" age={15} isStudent={false} />
      <Student name="Sandy" age={25} isStudent={true} />
      <Student />
      
    </>
  )
}

export default App
