import { useState } from "react"
import Memo2 from "./Memo2"
const Memo =()=>{
    const [count,setcount] = useState(0)
return(
    <>
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count=>count+1)}}>add count</button>
        <button onClick={()=>{setcount(count=>count-1)}}>minus count</button>
        <Memo2/>
    </div>
    </>
)
}
export default Memo;