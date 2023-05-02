import { memo } from "react";


  const Memo2 =()=>{
  console.log(`it's memo2`)
  
  }
  export default memo(Memo2);

  //usememo is use for render a component only one time, we have to wrap a component from memo only for once