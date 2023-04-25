const Respondevents=()=>{
 return(
<Buttonalert cricket={()=>alert("play,cricket")} ludo={()=>alert("play,ludo")} />
 )
 
}
const Buttonalert=({cricket,ludo})=>{
    return(
        <>
        <div>
        <h1>Return events alert by buttons</h1>
<Button onclick={cricket} name="Button1"/>
<Button onclick={ludo} name="Button2"/>
</div>
</>
)
}
const Button=({onclick,name})=>{
    return(
<button onClick={onclick}>{name}</button>
)
}
export default Respondevents;