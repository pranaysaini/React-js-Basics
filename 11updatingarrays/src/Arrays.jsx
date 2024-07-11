import React, {useState} from 'react';

function Arrays(){

    const [foods, setFoods] = useState(["Apple", "Mango", "Banana"])

    function handleAddFruit(){
        const ele = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""

        setFoods(s => [...s, ele])
    }

    function handleRemoveFruit(index){

        setFoods(foods.filter((_, i) => i!==index))

    }

    return (
        <>
            <div>
                <h1>Order Fruits</h1>

                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => {handleRemoveFruit(index)}} className="hover:cursor-pointer">{food}</li>)}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter Your Friut" />
                <button onClick={handleAddFruit}>Add Food</button>
            </div>

        </>
    );


}
export default Arrays