import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import HeroImage from "./images/kv_samolot.png";
import FirstSponsor from "./images/l_ekookna.png";
import SecondSponsor from "./images/l_intersport.png";
import ThirdSponsor from "./images/l_loccitane.png";
import FourthSponsor from "./images/lt.png";
import FifthSponsor from "./images/luxmed.png";
import SixthSponsor from "./images/zumbawear.png";

function Hero() {
  const btnStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
  };
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-title">
            <h6>INCREASE YOUR SALES</h6>
            <span>EFFECTIVE EMAIL MARKETING</span>
          </div>
          <div className="hero-p">
            <p>
              Effective, personalized, fully automated communication with your
              clients.
            </p>
          </div>
          <button>
            <Link style={btnStyle} to="/contact">
              CONTACT
            </Link>
          </button>
        </div>
        <div className="hero-img">
          <img src={HeroImage} alt="heroImage" />
        </div>
      </div>
      <div className="banner">
        <div className="banner-wrapper">
          <img src={FirstSponsor} alt="sponsor" />
          <img src={SecondSponsor} alt="sponsor" />
          <img src={ThirdSponsor} alt="sponsor" />
          <img src={FourthSponsor} alt="sponsor" />
          <img src={FifthSponsor} alt="sponsor" />
          <img src={SixthSponsor} alt="sponsor" />
        </div>
      </div>
    </>
  );
}

export default Hero;
