import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, SetisEmployed] = useState(false);

    const updateName = () => {
        setName("Sponjbob");
    }

    const incAge = () => {
        setAge(age+2)
    }

    const toggle = () => {
        SetisEmployed(!isEmployed)
    }

    return (
        <>
            <div>
                <p>Name:{name}</p>
                <button onClick={updateName}>Update Name</button>

                <p>Age:{age}</p>
                <button onClick={incAge}>Increase Age</button>

                <p>Status:{isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggle}>Check Status</button>

            </div>
        </>
    );


}
export default MyComponent