import { useRef, useState } from "react"

const Ref=()=>{
    const [msg,setMsg] = useState('')
    const [msg1,setMsg1] = useState('')
    const Refelement=useRef("")
    const Refelement1=useRef("")
    const first=()=>{
        console.log("hiiii")
        Refelement.current.focus() // it is the use for active focus on input 
     Refelement.current.style.color = "Red"   
    }
    const second=()=>{
        console.log("hi1")
        Refelement1.current.focus()
     Refelement1.current.style.color = "brown"   
    }
    return(
        <>
        <input ref={Refelement} type="text" onChange={e=>setMsg(e.target.value)} value={msg}/>
        <input ref={Refelement1} type="text" onChange={e=>setMsg1(e.target.value)} value={msg1}/>
        <button onClick={first}>first</button>
        <button onClick={second}>second</button>
        </>
    )
}
export default Ref;

// useRef
// this is a useref hook which is use to change in elements with the help of dom manipulation without rendering