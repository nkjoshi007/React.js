import { createContext } from "react";
import Context2 from "./Context2";


const data1= createContext();
const data2= createContext();
const data3= createContext();
const Context=()=>{
 
const name="naveen sharma"
const className="10th"
const gender="Male"
  return(
  <>
  <data1.Provider value={name}>
  <data2.Provider value={className}>
  <data3.Provider value={gender}>
  <Context2/>
  </data3.Provider>
  </data2.Provider>
  </data1.Provider>
  </>
    )
}
export default Context;
export {data1,data2,data3}
