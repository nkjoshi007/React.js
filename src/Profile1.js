import { useState } from "react";
const Profileimg=()=>{
   let [count,setcount]=useState(1)
    const Showid=()=>{
        let nme = document.getElementById("name").value
        let wrk =document.getElementById("work").value
        let slry =document.getElementById("salary").value
        let img =document.getElementById("pic").value
        console.log(nme)
        console.log(wrk)
        console.log(slry)
        console.log(img)
        setcount(count+1)
        console.log(count)
        const arr={
            id:{count},
            Name:{nme},
            Salary:{slry},
            Image:{img},
            Work:{wrk},
        }
        return(
        <div>
        <div>
            <h1>{arr.id}</h1>
            <img src={arr.Image} 
            alt={arr.Name}/>
            </div>
        Name:<input value={arr.Name}/>
        Work:<input value={arr.Work}/>
        salary:<input value={arr.Salary}/>
        </div>
        )
    
      }
   return( <div>
    Name:<input type="text" id="name"/>
    Work:<input type="text" id="work"/>
    salary:<input type="text" id="salary"/>
    Pic Link:<input type="text" id="pic"/>
   
    <button className="btn" onClick={Showid}>SHOW the id</button>
   </div>
   )
}
export default Profileimg;
