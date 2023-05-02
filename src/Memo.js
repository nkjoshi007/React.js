import { useMemo, useState } from "react"

  
  
  const Memo=()=>{
    const[add,setAdd] = useState(0)
  const Multiply=useMemo(()=>{
    console.log("hi")
    return add*10
  },[add])
   return(
    <>
    <h1>{add}</h1>
    <button onClick={()=>setAdd(add+1)}>Add</button>
    <button onClick={()=>setAdd(add-1)}>Minus</button>
    <h1>:{Multiply}</h1>
    <button onClick={Multiply}>Minus</button>
    </>
   )
  }
  export default Memo