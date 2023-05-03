import { useEffect, useState } from "react";

const Effect =()=>{
const [width,setWidth] = useState(window.screen.width)
const wid =()=>{
    setWidth(window.innerWidth)

}
useEffect(()=>{
    console.log("add")
    window.addEventListener("resize",wid)
    return ()=>{
        window.removeEventListener("resize",wid)
    console.log("remove")
    }
},[width])
return(
    <>
    <h1>this is the width of screen: {width}</h1>
    </>
)
}
export default Effect;

// useEffect
// useEffect is run all time when page will be render, so stop it's renderimg, we use array dependencies so we use it for when we want[] use effect has their own cleanup function which is a return function. we use this cleanup function to stop their previous rendering