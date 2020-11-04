import React from "react";
import "./Footer.scss";
import FacebookIcon from "./images/icons8-facebook-f-150.png";
import TwitterIcon from "./images/icons8-twitter-150.png";
import LinkedInIcon from "./images/icons8-linkedin-2-120.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-newsletter">
          <div className="footer-newsletter-title">
            <h1>I want a newsletter</h1>
            <p>
              Don't miss news, advice, valuable e-books and interesting case
              studies
            </p>
          </div>
          <form>
            <input required type="text" placeholder="Name" />
            <input required type="email" placeholder="E-mail address" />
            <br />
            <div className="form-inputs">
              <div className="form-input">
                <input required type="checkbox" name="firstCheck" />
                <label htmlFor="firstCheck">
                  I consent to the processing of my personal privacy
                </label>
              </div>
              <div className="form-input">
                <input required type="checkbox" name="secondCheck" />
                <label htmlFor="secondCheck">
                  I consent to the processing of my personal data
                </label>
              </div>
              <div className="form-input">
                <input required type="checkbox" name="thirdCheck" />
                <label htmlFor="thirdCheck">
                  I acknowledge that Admistrator of my personal data
                </label>
              </div>
            </div>
            <input type="submit" value="SIGN UP" />
          </form>
        </div>
        <div className="footer-banner">
          <p>
            <span>SMS marketing </span>
            campaigns are a perfect enrichment for an effective mailing
            <span> campaign</span> . The SARE system will allow you to carry it
            out easily and quickly.<span> SMS campaigns are </span>
            perfect for providing short, personalized information, especially
            when you need to reach the recipient immediately, regardless of
            whether he is at the computer or not.
          </p>
        </div>
        <div className="footer-content-container">
          <div className="footer-content">
            <div className="footer-content-items">
              <h1>Our solutions</h1>
              <p>Email Marketing</p>
              <p>SMS campaign</p>
              <p>Polls</p>
              <p>SMTP</p>
              <p>Recruitment system</p>
            </div>
            <div className="footer-content-items">
              <h1>Knowledge</h1>
              <p>Blog</p>
              <p>Case study</p>
              <p>Video</p>
              <p>To download</p>
            </div>
            <div className="footer-content-items">
              <h1>Price list</h1>
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Partner Program</p>
              <p>Career</p>
              <p>About us</p>
              <p>CSR</p>
              <p>contact</p>
            </div>
            <div className="footer-content-icons">
              <img src={FacebookIcon} alt="fbicon" />
              <img src={TwitterIcon} alt="twticon" />
              <img src={LinkedInIcon} alt="liicon" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2005-2020 Digitree Group. All rights reserved</p>
          <p>UNCRYSTALsystem belongs to Digitree Group SA</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
