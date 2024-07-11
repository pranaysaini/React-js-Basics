import React, {useState,  createContext, useContext} from "react";
import { UserContext } from "./ComponentA";
function ComponentC(){
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component C</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>

    );
}
export default ComponentC