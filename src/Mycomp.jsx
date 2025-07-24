import React, {useState, useEffect, useRef} from 'react';

function Mycomp(){
    const ref=useRef(0);

    useEffect(()=>{
        console.log("COMP ReNDERED");
    });

    function handleClick(){
        ref.current++;
        console.log(ref.current)
    }
    return(
        <div>
            <button onClick={handleClick}>
                click me!
            </button>
            <input type="text" name="" id="" />
        </div>
            
    );
}

export default Mycomp