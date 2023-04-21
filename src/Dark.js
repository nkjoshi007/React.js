const Dark = ()=>{
    const dark=()=>{
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"   
    }
    const white=()=>{
        document.body.style.backgroundColor = null
        document.body.style.color = null  
        }
    return(
        <div>
        <button className="btn" onClick={dark}>Dark theme</button>
        <button className="btn" onClick={white}>normal theme</button>
        </div>
    )
}
export default Dark;