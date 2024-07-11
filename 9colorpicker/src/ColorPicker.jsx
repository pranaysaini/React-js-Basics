import React, {useState} from "react";

function ColorPicker () {


    const [color, setColor] = useState("#FFFFFF")

    const colorHandler = (event) => {
        setColor(event.target.value)
    }
    
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <hi className="m-10 text-3xl">Color Picker</hi>
                <div style={{backgroundColor: color}} className="border-4 border-black  rounded-3xl">
                    <p className="w-80 h-40 flex justify-center items-center font-bold">Selected Color: {color}</p>
                </div>

                <div className="m-5">
                    <label>Select a Color : </label>
                    <input type="color" value={color} onChange={colorHandler}/>

                </div>

            </div>

                        
        
        </>
    );

}
export default ColorPicker