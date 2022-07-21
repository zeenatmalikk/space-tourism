import React,{useState} from "react";
import logo from "../../starter-code/assets/shared/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const[state,setState]=useState(false)
const handleClick=()=>{

  setState(!state)
}
  return (
    <div>
      <header className="primary-header">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <button className="mobile-nav-toggle" onClick={handleClick}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        {/* <span className="border-mid"></span> */}
        <nav className={state ? "primary-nav active" : "primary-nav"}>
          <Link to="/">
            <p className="link-name" >00 Home</p>
          </Link>
          <Link to="/destination">
            <p className="link-name">01 Destination</p>
          </Link>
          <Link to="/crew">
            <p className="link-name">02 Crew</p>
          </Link>
          <Link to="/launch">
            <p className="link-name">03 Technology</p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
