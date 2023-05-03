import { useReducer } from "react"
 const intialstate=0
 const reducer=(state,Action)=>{
if(Action==="Increment"){
    return state+1
}else if(Action==="Decrement"){
return state-1
}else{
    return state
}
// switch(Action){
// case "Increment":
//     return state+1
// case "Decrement":
//     return state-1
//     default:
//         return state
//}
}
const Reducer=()=>{
  const[count , dispatch]=  useReducer(reducer , intialstate)

  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch("Increment")}>Increment</button>
    <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </>
  )
}
export default Reducer;

//useReducer
// usereducer is like usestate . it is also use for state management but it is use for complex state . it has initialstate for decribe the variable and value . dispatch is a function which is use in reducer . we pass two parameters in reducers which is : state and action , there state is initialstate  