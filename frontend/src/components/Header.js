import React, { useState, useEffect } from "react";
import logo from "../assets/logo1.png";
import "./Header.css";

function Header() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  return (
    <div className={`header ${showBackground && "header__background"}`}>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo"/>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
          
        </nav>
        {/* <div className="auth-buttons">
          <button className="btn-login">Connexion</button>
          <button className="btn-signup">Inscription</button>
        </div> */}
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    </div>
    
  );
}

export default Header;