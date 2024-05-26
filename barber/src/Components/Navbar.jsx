import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { RxScissors } from "react-icons/rx";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const activateClass = () => {
    setActive(true);
    if (active === true) {
      setActive(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-contents">
          <Link to="/">
            <img
              src="https://fullstackweek-barber.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75"
              alt="nil"
            />
          </Link>
          <div className="hamburger-menu">
            <RxScissors onClick={activateClass} />
          </div>
        </div>
      </nav>
      <div className={active ? "hamburger-slide-active" : "hamburger-slide"}>
        <div className="hamburger-contents">
          <div className="menuheading">
            <h1>Menu</h1>
          </div>
          <div className="menus">
            <div className="login">
              <Link className="login-link" to="/register">
                <h3>Login</h3>
              </Link>
              <MdLogin className="login-btn" />
            </div>
            <div className="reservations">
              <h4>Your reservations</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
