import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NotaContext } from "../context/NotaContexts";

function Header() {
  const [isActive, setIsActive] = useState(true);
  const {firstName, lastName} = useContext(NotaContext);
  const navigate = useNavigate();

  function getStarted(){

    if(firstName && lastName){
      navigate('/appLayout')
    }else{
      navigate('/appLayout')
    }
  }
  return (
    <header>
      <div className="mobile-logo">
        <Link to="/">
          <p id="logo">N!</p>
        </Link>
      </div>
      <nav className={isActive ? "isactive" : ""}>
        <ul className="navigation">
          <NavLink to="/Features">
            <li>Features</li>
          </NavLink>
          <NavLink to="/Faq">
            <li>FAQ</li>
          </NavLink>
          <Link to="/">
            <li id="logo" className="web-logo">
              N!
            </li>
          </Link>
          <NavLink to="/developer">
            <li>Developer</li>
          </NavLink>
          
            <li onClick={getStarted}>Get Started</li>
        </ul>
      </nav>
      <div
        className="menu"
        onClick={() => {
          setIsActive((i) => !i);
        }}
      >
        {isActive ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <FaX />
        )}
      </div>
    </header>
  );
}

export default Header;
