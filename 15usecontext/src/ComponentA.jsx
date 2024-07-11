import React, {useState, createContext, useContext} from "react";
import ComponentB from "./ComponentB";


export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Pranay Saini")

    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <ComponentB />
            </UserContext.Provider>
        
        </>

    );
}
export default ComponentA