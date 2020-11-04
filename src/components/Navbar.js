import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "#141414",
    textDecoration: "none",
    fontFamily: "sans-serif",
  };
  const linkBtnStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  };
  const mobileNavStyle = {
    fontSize: "13px",
    color: "#141414",
    textDecoration: "none",
  };
  const logoStyle = {
    textDecoration: "none",
  };

  const showLinks = () => {
    const mobileNav = document.querySelector(".mobileNav");
    mobileNav.classList.toggle("Nav");
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link style={logoStyle} to="/" onClick={showLinks}>
            <p>UNCRYSTAL</p>
            <span>system</span>
          </Link>
        </div>
        <div className="hamburger" onClick={showLinks}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
        <ul className="links">
          <li>
            <Link style={linkStyle} to="/">
              Uncrystal
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/product">
              Products
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/pricelist">
              Price list
            </Link>
          </li>

          <li>
            <Link style={linkStyle} to="/aboutus">
              About Us
            </Link>
          </li>
          <button>
            <Link style={linkBtnStyle} to="/contact">
              CONTACT
            </Link>
          </button>
        </ul>
      </header>
      <div className="mobileNav">
        <ul className="mobileNav-links">
          <li>
            <Link style={mobileNavStyle} onClick={showLinks} to="/">
              UNCRYSTAL
            </Link>
          </li>
          <li>
            <Link style={mobileNavStyle} to="/product" onClick={showLinks}>
              Products
            </Link>
          </li>
          <li>
            <Link style={mobileNavStyle} to="/pricelist" onClick={showLinks}>
              Price list
            </Link>
          </li>
          <li>
            <Link style={mobileNavStyle} to="/aboutus" onClick={showLinks}>
              About Us
            </Link>
          </li>
          <button>
            <Link style={linkBtnStyle} to="/contact" onClick={showLinks}>
              CONTACT
            </Link>
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
