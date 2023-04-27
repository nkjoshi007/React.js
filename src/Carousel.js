import { useState } from "react";

const Carousel=({img1,img2,img3,img4,img5,img6,img7,img8,img9})=>{
    const [img,setimg] = useState(img1)
    let [count,setcount] = useState(0)
    const Pic = [img1,img2,img3,img4,img5,img6,img7,img8,img9]
    let s = Pic.length-1
    if(count<0){
    count=s
    }else if(count>s){
    count=0
    }
    const Next=()=>{
    setcount(++count)
    let ide =Pic[count]
    if(count>=0 && count<=s){
        setimg(ide)
    }else{
        setimg(Pic[s])
    }
    console.log(Pic)
    console.log(ide)
    console.log(count)
}
const Previous=()=>{
setcount(--count)
    let ide =Pic[count]
    if(count<=(Pic.length-1) && count>0){
        setimg(ide)
    }else{
        setimg(img1)

    }
    console.log(Pic)
    console.log(ide)
    console.log(count)
}
    return(
        <>
        <h1 className="center">Race-3 Ka Salman Khan</h1>
        <div className="carousel">
        <button onClick={Previous}>&lt;</button>
        <img src={img} alt="Network problem" />
        <button onClick={Next}>&gt;</button>
        </div>
        </>
    )
}
export default Carousel;