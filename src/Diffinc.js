import { useState } from "react";

const Diffinc =()=>{
    const [number,setNumber]=useState(0)
    const incr=()=>{
     setNumber(number=>number+1)
    }
    return(
        <>
        <div className="profile">
        <button onClick={()=>incr()}>+1</button>
        <button onClick={()=>{incr();
            incr();
            incr();}}>+3</button>
            <h1>{number}</h1>
            </div>
        </>
    )
}
export default Diffinc;