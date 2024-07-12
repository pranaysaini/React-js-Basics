import React, {useState, useEffect, useRef} from "react";

function MyComponent() {
    
    const ref = useRef("Pizza");
    console.log(ref);

    useEffect(() => {
        console.log("Component Rerendered")
    })

    function handleChange(){
        ref.current++;
    }

    return (
        <>

        <div>
            <button onClick={handleChange}>
                Click Me
            </button>
        </div>
            
        </>
    );
}
export default MyComponent