import { useState } from "react";

const Clickcount=()=>{
    const [count,setcount]=useState(0)
    const Handleclick = ()=>{
    setcount(count + 1)
}
return(
    <div>
        <h1>hi</h1>
    <Mybutton count={count} onClick={Handleclick}/>
    <Mybutton count={count} onClick={Handleclick}/>
    </div>
)
}
const Mybutton=({count,onClick})=>{
    return(
        <button className="btn" onClick={onClick}>click {count} times</button>
    )
}
export default Clickcount;