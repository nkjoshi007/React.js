import './style.css';
const Eventr=()=>{
    const upper=()=>{
       let text =  document.getElementById('txt_id')
     let  text2= text.value.toUpperCase()
       text.value =text2
    }
    const lower=()=>{
       let text =  document.getElementById('txt_id')
       let text2 =text.value.toLowerCase()
        text.value =text2

    }
    return(
        <>       
        <div className='btns'>
        <textarea className="txt" id="txt_id"  placeholder='text here to change text into uppercase or lowercasse' rows={8} cols={100}/>
        <button className="btn" onClick={upper}>changetxt to Uppercase</button>
        <button className="btn" onClick={lower}>changetxt to Lowecase</button>
        </div>
        </>

    )
}
export default Eventr;