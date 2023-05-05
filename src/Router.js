import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/"  className="link">Home</Link>
          </li>
          <li>
            <Link to="/Carousel" className="link">Carousel</Link>
          </li>
          <li>
            <Link to="/Profilechanger" className="link">Profilechanger</Link>
          </li>
          <li>
            <Link to="/App" className="link">App</Link>
          </li>
          <li>
            <Link to="/Hello" className="link">Hello</Link>
          </li>
          <li>
            <Link to="/Profile" className="link">Profile</Link>
          </li>
          <li>
            <Link to="/Btn" className="link">Btn</Link>
          </li>
          <li>
            <Link to="/Cls" className="link">Cls</Link>
          </li>
          <li>
            <Link to="/FizzBuzz" className="link">FizzBuzz</Link>
          </li>
          <li>
            <Link to="/Eventr" className="link">Eventr</Link>
          </li>
          <li>
            <Link to="/Dark" className="link">Dark</Link>
          </li>
          <li>
            <Link to="/Clickcount" className="link">Clickcount</Link>
          </li>
          <li>
            <Link to="/List" className="link">List</Link>
          </li>
          <li>
            <Link to="/Profileimg" className="link">Profileimg</Link>
          </li>
          <li>
            <Link to="/Respondevents" className="link">Respondevents</Link>
          </li>
          <li>
            <Link to="/Mail" className="link">Mail</Link>
          </li>
          <li>
            <Link to="/Diffinc" className="link">Diffinc</Link>
          </li>
          <li>
            <Link to="/Qna" className="link">Qna</Link>
          </li>
          <li>
            <Link to="/Todolist" className="link">Todolist</Link>
          </li>
          <li>
            <Link to="/Context" className="link">Context</Link>
          </li>
          <li>
            <Link to="/Memo" className="link">Memo</Link>
          </li>
          <li>
            <Link to="/Ref" className="link">Ref</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </>
  )
};

export default Layout;