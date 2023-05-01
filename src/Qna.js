import { useState } from "react";

const Qna=({Sawal1,Ans,Hint})=>{
   
const Que=({Sawal,hint})=>{
    const [message,setMessage]=useState('')
    let button= document.getElementById('submit')
    if(message===null){
        button.disabled=true
    }
    
    const Check=(e)=>{
        e.preventDefault()
        let M = message.toUpperCase()
        let A =Ans.toUpperCase()
             if(M===A){
                 alert("this is right")
                 console.log(M +" "+ A)
             }else{
                 alert("this is wrong")
                 console.log(M + " "+A)
             }
            }
    return(
    <>
    <h1 className="center">Question and answer in one word (Qna)</h1>
    <div className="Qna">
    <p>Q: {Sawal} ({hint})</p>
    <textarea rows={10} cols={30}  onChange = {(e) =>{setMessage(e.target.value) }}  value={message}  placeholder="write your answer here"/>
    <button disabled={message.length === 0 } id="submit" className="btn" onClick={Check}>Submit</button>
    </div>
    </>
    )
}
return(
    <>
    <Que Sawal={Sawal1} hint={Hint}/>
    </>
)
}
export default Qna;