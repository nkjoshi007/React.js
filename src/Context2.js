import { useContext } from "react";
import { data1,data2,data3 } from "./Context";
const Context2=()=>{
    const name = useContext(data1)
    const className = useContext(data2)
    const gender = useContext(data3)
    return(
        <>
        <h1>name:{name}</h1>
        <h1>class:{className}</h1>
        <h1>Gender:{gender}</h1>
        </>
    )
}
export default Context2;