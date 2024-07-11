import React, {useState, createContext, useContext} from "react";
import ComponentC from './ComponentC.jsx'
function ComponentB(){

    return (
        <>  
        <h1>Component B</h1>
            <ComponentC />
            
        </>

    );
}
export default ComponentB