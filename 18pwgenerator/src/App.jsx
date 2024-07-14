import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[len, setLen] = useState(8)
  const[isNum, setNum] = useState(false)
  const[isChar, setChar] = useState(false)
  const[password, setPassword] = useState(" ")

  const pwref = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNum) str+='1234567890'
    if(isChar) str+='!@#$%^&*()_-+='

    for(let i=0  ; i<len ; i++){
      const char = Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  }, [len, isNum, isChar])
  
  
  useEffect(() => {
      generatePassword()
  }, [len, isNum, isChar])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    pwref.current?.select()
  }


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1>Password Generator</h1>
        <div>
          <input type="text" value={password} placeholder="Password" readOnly ref={pwref}/>
          <button onClick={copyPassword}>Copy</button>
        </div>

        <div>
          <div>
             <input type="range" min={6} max={100} value={len} className="cursor-pointer" onChange={(e) => setLen(e.target.value)} />
             <label htmlFor="length">Length: {len}</label>
          </div>

          <div>
             <input type="checkbox" defaultChecked={isNum} onChange={() => {setNum((prev) => !prev)}} />
             <label htmlFor="numbers">Numbers</label>
          </div>
            
          <div>
             <input type="checkbox" defaultChecked={isChar} onChange={() => {setChar((prev) => !prev)}} />
             <label htmlFor="char">Character</label>
          </div>

        </div>

      </div>
          
      
    </>
  )
}

export default App
