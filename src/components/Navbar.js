import React, { useState } from "react";
/* import { Button } from "./Button"; */
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  /* const [button, setButton] = useState(true); */

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*   const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; */

  /* useEffect(() => {
    showButton();
  }, []); */

  /* window.addEventListener("resize", showButton); */

  return (
    <>
      <nav className="navbar">
        {/* <div className="navbar-container"> */}
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          <i className="fas fa-laptop-code navbar__logo__icon" />
          Dialguiba
        </Link>
        <div className="navbar__menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "navbar__nav-menu navbar__active" : "navbar__nav-menu"}>
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__link" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/articles" className="navbar__link" onClick={closeMobileMenu}>
              Articles
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
        {/*   </div> */}
      </nav>
    </>
  );
}

export default Navbar;
