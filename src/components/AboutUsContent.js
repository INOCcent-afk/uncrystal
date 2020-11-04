import React from "react";
import "./AboutUsContent.scss";
import Onas1 from "./images/onas_1.svg";
import Onas3 from "./images/onas_3.svg";
import Onas5 from "./images/onas_5.svg";
import Onas9 from "./images/onas_9.svg";
import Onas2 from "./images/onas_2.svg";
import Onas4 from "./images/onas_4.svg";
import Onas6 from "./images/onas_6.svg";
import Onas8 from "./images/onas_8.svg";
import Onas10 from "./images/onas_10.svg";

function AboutUsContent() {
  return (
    <>
      <div className="about-us-content-container">
        <div className="about-us-content">
          <div className="about-us-column">
            <div className="card">
              <div className="card-img">
                <img src={Onas1} alt="svg" />
              </div>
              <div className="card-content">
                <h1 className="lightGreenT">
                  twenty <span>PERSONS</span>
                </h1>
                <p>in the Customer Service Department he works at</p>
                <h6 className="orangeT">100% effective</h6>
                <p>Your campaigns.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas3} alt="svg" />
              </div>
              <div className="card-content">
                <p>We serve clients</p>
                <h6 className="lightGreenT">WITH MORE THAN40</h6>
                <p>Different countries scattered around the world</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas5} alt="svg" />
              </div>
              <div className="card-content">
                <p>
                  We receive as many e-mails a month as there are people living
                </p>
                <h1>IN PARIS</h1>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas9} alt="svg" />
              </div>
              <div className="card-content">
                <p>Out of close</p>
                <h1 className="orangeT">250</h1>
                <p>Digitree Group employees</p>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="about-us-column">
            <div className="card">
              <div className="card-img">
                <img src={Onas2} alt="svg" />
              </div>
              <div className="card-content">
                <p>Parity is not an empty slogan for us.</p>
                <h1>50 %</h1>
                <p>managerial positions are shared by women</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas4} alt="svg" />
              </div>
              <div className="card-content">
                <p>Some clients have been with us continuously for over</p>
                <h1 className="orangeT">13 YEARS</h1>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas6} alt="svg" />
              </div>
              <div className="card-content">
                <p>
                  We have a scientific approach to email marketing. We were the
                  first to lead in
                </p>
                <h6 className="lightGreenT">2005 YEAR</h6>
                <p>Research on the use of electronic mail in poland</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas8} alt="svg" />
              </div>
              <div className="card-content">
                <p>We spend at work</p>
                <h1 className="lightGreenT">1/3 OF LIFE</h1>
                <p>
                  thats why we create a friendly environment. visit us and youll
                  find out.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Onas10} alt="svg" />
              </div>
              <div className="card-content">
                <p>Sometimes our effectiveness has to be supported even</p>
                <h6>TWENTY LITERS OF COFFEE</h6>
                <p>daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-content-hero">
        <p>WHAT DO OUR CUSTOMERS VALUE US FOR?</p>
        <p>
          The UNCRYSTAL system is an advanced tool that allows you to implement
          non-standard 'tailor-made' solutions, thanks to which the
          effectiveness of e-mail marketing activities increases. We use the
          UNCRYSTAL system for the implementation of e-mail marketing campaigns
          and the services of a graphic studio, whose specialists help us
          prepare our Newsletter in accordance with the current market trends.
          We would also like to pay attention to the high quality of customer
          service - a dedicated consultant supports us reliably and on time
        </p>
      </div>
    </>
  );
}

export default AboutUsContent;
