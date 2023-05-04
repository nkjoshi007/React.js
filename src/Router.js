import {  Routes, Route } from "react-router-dom";
import Reducer from './Reducer';
import Todolist from './Todolist';


const Router=()=>{
    return(
        <Routes>
            {/* <Route exact path="/" element={<root />} /> */}
    <Route exact path="/" element={<Reducer />}/>
    <Route exact path="/Todolist" element={<Todolist />} />
        </Routes>
    )
} 
export default Router;