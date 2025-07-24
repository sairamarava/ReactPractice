import { useState } from "react";

const Button=()=>{
    const [uid,setUID]=useState('');
    const [upass,setPassword]=useState('');

    const handleSubmit=()=>{
        if (uid==="sai" && upass==="1"){
            alert("Valid user");
        }
        else{
            alert("Invalid user")
        }
    }
    const [data,setDate]=useState("Type to Change this");



    return(
        <>
        <div className="stopwatch">
            <h1>Sample Text </h1>
            <textarea name="" id="" onChange={(e)=>setDate(e.target.value)}></textarea>
            <p>{data}</p>
        </div>
        </>
    )
}
export default Button;