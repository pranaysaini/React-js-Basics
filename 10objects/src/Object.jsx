import React, {useState} from 'react';

function Objects(){
    
    const [car, setCar] = useState({year: 2024, make:"Ford", model: "Mustang"})

    function yearChange  (event)  {
        setCar(c => ({...c, year: event.target.value}))
    }
    
    function makeChange(event){
        setCar(c=>({...c, make: event.target.value}))
    }

    function modelchange(event){
        setCar(c=>({...c, model: event.target.value}))
    }
    return (
        <>

            <div>
                <p>Your Car is : {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={yearChange} />
                <input type="text" value={car.make} onChange={makeChange}/>
                <input type="text" value={car.model} onChange={modelchange}/>
            </div>

        </>
    );


}
export default Objects