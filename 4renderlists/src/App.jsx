import { useState } from 'react'
import './App.css'
import List from './List.jsx'

function App() {
  const [count, setCount] = useState(0)

  const fruits = [{id:1, name: "apple", calories: 95},
                  {id:2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 85},
                  {id: 4, name: "grapes", calories: 78},
                  {id: 5, name: "papaya", calories: 47}];

  
  const vegetables = [{id:1, name: "Potato", calories: 95},
                      {id:2, name: "Tomato", calories: 45},
                      {id: 3, name: "Celery", calories: 85},
                      {id: 4, name: "Carrot", calories: 78},
                      {id: 5, name: "Brinjel", calories: 47}];


  return (
    <>
        <List itmes={fruits} categories="Fruits" />
        

    </>
  );
}

export default App
