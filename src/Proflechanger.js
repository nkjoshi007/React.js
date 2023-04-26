import { useState } from "react";

const Profilechanger=()=>{
    const [obj,setobj]=useState({
        name:"Robert Downey Jr.",
        Identity:{
            Role:"Iron man",
            name2:"Tony stark",
            Img:"https://bgr.com/wp-content/uploads/2019/11/avengers-endgame-iron-man-gauntlet.jpg?quality=82&strip=all&resize=1400,1400",
        }
    })
    const namechange=(e)=>{
        setobj({
            ...obj,
            name:e.target.value})
    }
    const Rolechange=(e)=>{
        setobj({
            ...obj,
            Identity:{
                ...obj.Identity,
                Role:e.target.value}})
    }
    const name2change=(e)=>{
        setobj({
            ...obj,
            Identity:{
                ...obj.Identity,
                name2:e.target.value}})
    }
    const Imagechange=(e)=>{
        setobj({
            ...obj,
            Identity:{
                ...obj.Identity,
                Img:e.target.value}
            })
    }
    
    return(
        <>
        <div className="profilechange1">

            <h1>This is profilechanger</h1>
        <div className="profilechange">
            <div>
            <Input name={obj.name} onchange={namechange} namex="Name" />
            <Input name={obj.Identity.Role} onchange={Rolechange} namex="Role" />
            <Input name={obj.Identity.name2} onchange={name2change} namex="Name2" />
            <Input name={obj.Identity.Img} onchange={Imagechange} namex="Image" />
            </div>
            <div>
            <p>{obj.name} is {obj.Identity.name2} in {obj.Identity.Role}</p>
            <img src={obj.Identity.Img} alt={obj.Identity.Role}/>
            </div>
        </div>
        </div>
        </>
    )
}
const Input=({name,onchange,namex})=>{
    return(
    <div>
    {namex}: <input value={name} onChange={onchange}/>
    </div>
    )
}
export default Profilechanger;