import React, {useState, useEffect} from "react";

function MyComponent (){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    function addCount(){
        setCount(c=>c+1);
    }
    
    function decCount(){
        setCount(c=>c-1);
    }

    function flipColor(){
        setColor (l => l === "green" ? "red" : "green")
    }
    

    return (
        <>
        <p style={{color: color}}>Count : {count}</p>
        <button onClick={addCount}>ADD</button>
        <button onClick={decCount}>DEC</button>

        <br />

        <button onClick={flipColor}>Change Color</button>
            
        
        </>
    );
}
export default MyComponent