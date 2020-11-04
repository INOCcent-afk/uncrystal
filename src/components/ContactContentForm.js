import React from "react";
import "./ContactContentForm.scss";
import Kons from "./images/kons.png";

function ContactContentForm() {
  return (
    <>
      <div className="contact-content-container">
        <div className="contact-content">
          <div className="contact-content-img">
            <img src={Kons} alt="png" />
          </div>
          <div className="contact-content-divs">
            <div className="contact-content-div">
              <h6>Marzena Michalska</h6>
            </div>
            <div className="contact-content-div">
              <h6>Kasia Śliwińska</h6>
            </div>
            <div className="contact-content-div">
              <h6>Marysia Dzierbicka</h6>
            </div>
          </div>
        </div>
        <form>
          <div className="form-title">
            <h1> WRITE TO US</h1>
          </div>
          <div className="form-content">
            <input required type="text" placeholder="Name" />
            <input required type="tel" placeholder="Telephone" />
            <input required type="email" placeholder="E-mail address" />
            <textarea required placeholder="Message"></textarea>
            <div className="checkbox-container">
              <input required type="checkbox" name="checkbox1" />
              <label htmlFor="checkbox1">
                I consent to the processing of my data
              </label>
            </div>
            <div className="checkbox-container">
              <input required type="checkbox" name="checkbox2" />
              <label htmlFor="checkbox2">
                I consent to the processing of my privacy
              </label>
            </div>
            <div className="checkbox-container">
              <input required type="checkbox" name="checkbox3" />
              <label htmlFor="checkbox3">I acknowledge that the data</label>
            </div>
            <input type="submit" value="SEND" />
          </div>
        </form>
      </div>
      <div className="form-footer">
        <div className="form-footer-item">
          <h1>Headquarters in Rybnik</h1>
          <p>ul. Raciborska 35a,</p>
          <p>44-200 Rybnik</p>
        </div>
        <div className="form-footer-item">
          <h1>Branch in Warsaw</h1>
          <p>ul. Grzybowska 2/34,</p>
          <p>00-131 Warsaw</p>
        </div>
        <div className="form-footer-item">
          <h1>Company registration data</h1>
          <p>
            Digitree Group SA, ul. Raciborska 35a, 44-200 Rybnik, NIP:
            6422884378, KRS: 0000369700, REGON: 240018741, Share capital: PLN
            248,577.50
          </p>
          <p>Data Protection Officer: Katarzyna Sekuła, iod@digitree.pl</p>
        </div>
      </div>
    </>
  );
}

export default ContactContentForm;
