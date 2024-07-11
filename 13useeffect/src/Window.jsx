import React, {useState, useEffect} from "react";

function Window(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)

    function handleSize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    useEffect(() => {
        document.title = `Size: ${width}*${height}`
    }, [width, height])


    useEffect(() => {
        window.addEventListener("resize", handleSize);
        console.log("Event Listner Added")

        return() => {
            window.addEventListener("resize", handleSize);
            console.log("Event Listner Remove")
            
        }
    }, [])

    
    return (
        <>

        <div>
            <p>Height of Window: {height}px</p>
            <p>Width of Window: {width}px</p>
        </div>
            
        </>
    );
}
export default Window