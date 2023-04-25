import { useState } from "react"
const Mail=()=>{
    const [text,setText]=useState("hi")    
    const [select,setselect]=useState('NK')
const Send=(e)=>{
    e.preventDefault();
    setTimeout(()=>{
alert(`you said ${text} to ${select}`)
},2000)
}
    const Select=()=>{
    
        return(
            <>
            <div>
                <select
                value={select}
                onChange={e=>setselect(e.target.value)}
                >
                    <option value="NK">NK</option>
                    <option value="KK">KK</option>
                </select>
            </div>
            </>
        )
    }
return(
    <>    
    <div className="profile">
    <form onSubmit={Send}>
    <textarea value={text} onChange={e=>setText(e.target.value)} rows={10} cols={100} placeholder="enter msg here"/>
    <Select />
    <button type="submit">submit</button>
    </form>
    </div>
    </>

    )
   
}
export default Mail;