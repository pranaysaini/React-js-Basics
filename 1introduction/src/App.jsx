import { useState } from 'react'
import './App.css'
import './Header.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Food/>
        <Footer/>
      
    </>
  )
}

export default App
