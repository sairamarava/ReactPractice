import ComponentC from "./ComponentC";
import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentB(){
    const user =useContext(UserContext);
    return(
        <div className="box">
            <h1>Text of B {user}</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB;