import { useCallback, useState } from "react"
import Callback from "./Callback"
  
  
  const Memo=()=>{
    const[add,setAdd] = useState(0)
    const[minus,setMinus] = useState(100)
  // const Multiply=useMemo(()=>{
  //   console.log("hi")
  //   return minus*10
  // },[minus])
  const Func=useCallback(()=>{
   //nothing to have
  },[])
   return(
    <>
    <h1>{add}</h1>
    <button onClick={()=>setAdd(add+1)}>Add</button>
    <h1>{minus}</h1>
    <button onClick={()=>setMinus(minus-1)}>Minus</button>
    {/* <h1>:{Multiply}</h1> */}
    <Callback name={Func}/>
    </>
   )
  }
  export default Memo

// useMemo
// this is use memo where we use minimum one dependecies to rendering a functions when we use that component then that memo function will be rendering


// useCallback
// this is the hook which can stop the rendering fully or we can use dependencies for rendering the function, we have to use memo to bind the component with memo