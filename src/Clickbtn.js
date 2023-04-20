import { useState } from "react";

export default function Btn(){
    let [count,countagain]=useState(0);
    const clickBtn=()=>{
     countagain(count+1)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={clickBtn}>click me</button>
        </>
    )
}