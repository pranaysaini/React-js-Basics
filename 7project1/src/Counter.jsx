import React, {useState} from 'react'

function Counter(){
    
    const [count, setCount] = useState(0);
    
    const decrement = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }
    const increment = () => {
        setCount(count+1)
    }

    return (
        <>
            <div className = "h-screen w-full text-center text-2xl bg-green-600">
                <p className = "text-8xl text-yellow-500 pt-60">{count}</p>

                <div className="flex flex-wrap justify-evenly items-center mt-40">
                    <button onClick={decrement} className="border border-blue-900 rounded-2xl border-4 bg-blue-700 text-3xl text-white min-w-60 max-h-18 h-20 my-5 hover:bg-blue-500 ">Decrement</button>
                    <button onClick={reset}  className="border border-blue-900 rounded-2xl border-4 bg-blue-700 text-3xl text-white min-w-60 h-20 my-5 hover:bg-blue-500">Reset</button>
                    <button onClick={increment}  className="border border-blue-900 rounded-2xl border-4 bg-blue-700 text-white text-3xl min-w-60 h-20 my-5 hover:bg-blue-500">Increment</button>
                </div>
                
            </div>
        </>
    );

}
export default Counter