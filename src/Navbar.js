// import { Outlet, Link } from "react-router-dom";
//   const Navbar=()=>{
//    return(
//     <>
//     <div className="navBar">
//         <p className="navBarName"><a href="/">React Js file</a></p>
//         <ul>
//             <li><a href="../public/index.html">Home</a></li>
//             <li><select>
//             <option><Link to={`Memo`}>useMemo</Link></option>
//             <option><Link to={`Reducer`}>useReducer</Link></option>
//             <option><Link to={`Effect`}>useEffect</Link></option>
//             <option><Link to={`Todolist`}>Todolist</Link></option>
//             <option><Link to={`Dark`}>Dark button</Link></option>
//             <option><Link to={`Context`}>useContext</Link></option>
//             <option><Link to={`Profile1`}>Profilemaker</Link></option>
//             <option><Link to={`Profilechanger`}>Profilechanger</Link></option>
//             <option><Link to={`Qna`}>Qna</Link></option>
//             </select>
           
//             </li>
//         </ul>
//     </div>
//     <Outlet />
//     </>
//    )
//   }
//   export default Navbar;

import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <p className="navBarName"><a href="/">React Js file</a></p>
        <a href="../public/index.html">Home</a>
            <Link to="./Todolist">Todolist</Link>
            <Link to="./Reducer">useReducer</Link>
            {/* <Link to={`Memo`}>useMemo</Link>
            <Link to={`Effect`}>useEffect</Link>
            <Link to={`Dark`}>Dark button</Link>
            <Link to={`Context`}>useContext</Link>
            <Link to={`Profile1`}>Profilemaker</Link>
            <Link to={`Profilechanger`}>Profilechanger</Link>
            <Link to={`Qna`}>Qna</Link> */}
      </div>
    </>
  );
};

export default Navbar;
