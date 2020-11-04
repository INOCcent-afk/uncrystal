import React from "react";
import "./PriceListHero.scss";
import PriceListLogo from "./images/rodosafe@2x.png";

function PriceListHero() {
  return (
    <>
      <div className="pricelist-hero-container">
        <div className="pricelist-hero">
          <div className="pricelist-hero-content">
            <h1>ONLINE MARKETING</h1>
            <h1>TO SUIT EVERYONE'S NEED</h1>
            <p>
              Are you looking for a mailing system that will finally meet your
              expectations? You're in the right place. Check out the perfect
              package for you and start earning money with email marketing and
              more.
            </p>
          </div>
          <div className="pricelist-hero-img">
            <img src={PriceListLogo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="pricelist-packages">
        <div className="package">
          <div className="package-title">
            <h1>STANDARD</h1>
            <p>Get started</p>
            <p>with email marketing</p>
          </div>
          <div className="package-size">
            <p>
              Base Size: <span>1,000</span>
            </p>
          </div>
          <div className="package-price">
            <div className="package-price-title">
              <p>45.00</p>
              <div className="priceinfo">
                <p>PLN</p>
                <p>per month</p>
              </div>
            </div>
            <button>CHOOSE A PACKAGE</button>
          </div>
          <div className="package-footer">
            <div className="package-footer-item">
              <h1>EMAIL MARKETING</h1>
              <p>
                <span> + </span>Message editor (standard and Drag & Drop)
              </p>
              <p>
                <span> + </span>Import and segmentation of the address database{" "}
              </p>
              <p>
                <span> + </span>Planning of shipments (SPAM test, link tester,
                previews)
              </p>
              <p>
                <span> + </span>Simple personalization
              </p>
              <p>
                <span> + </span>Real-time reports
              </p>
            </div>
            <div className="package-footer-item">
              <h1>POLLS</h1>
              <p>
                <span> + </span>Basic
              </p>
              <p>
                <span> + </span>5 questions
              </p>
            </div>
            <div className="package-footer-item">
              <h1>Address database</h1>
              <p>
                <span> + </span>Form generator
              </p>
              <p>
                <span> + </span>31 groups
              </p>
            </div>
            <div className="package-footer-item">
              <h1>Other</h1>
              <p>
                <span> + </span>1 user
              </p>
            </div>
          </div>
          <div className="package-btn">
            <button>CHOOSE A PACKAGE</button>
          </div>
        </div>
        <div className="package">
          <div className="package-title">
            <h1>ADVANCED</h1>
            <p>New opportunities for</p>
            <p>experienced marketers</p>
          </div>
          <div className="package-size">
            <p>
              Base Size: <span>5,000</span>
            </p>
          </div>
          <div className="package-price">
            <div className="package-price-title">
              <p>279</p>
              <div className="priceinfo">
                <p>PLN</p>
                <p>per month</p>
              </div>
            </div>
            <button>CHOOSE A PACKAGE</button>
          </div>
          <div className="package-footer">
            <div className="package-footer-item">
              <h1>EMAIL MARKETING</h1>
              <p>
                <span> + </span>Advanced segmentation of the address database
                (flowcharts)
              </p>
              <p>
                <span> + </span>Demographic, geolocation and behavioral
                targeting
              </p>
              <p>
                <span> + </span>Advanced shipments (conditional, recurring,
                follow-up, autoresponders, filtering shipments)
              </p>
              <p>
                <span> + </span>Advanced personalization (dynamic: content,
                sender, attachments, name variation)
              </p>
              <p>
                <span> + </span>Multivariate A / B / X tests
              </p>
              <p>
                <span> + </span>Optimization of shipments according to the
                recipient's behavior
              </p>
              <p>
                <span> + </span>Extensive report module
              </p>
            </div>
            <div className="package-footer-item">
              <h1>POLLS</h1>
              <p>
                <span> + </span>filtering the results
              </p>
              <p>
                <span> + </span>Defining the duration
              </p>
              <p>
                <span> + </span>30 questions
              </p>
            </div>
            <div className="package-footer-item">
              <h1>Address database</h1>
              <p>
                <span> + </span>5 database write interfaces
              </p>
              <p>
                <span> + </span>SOAP
              </p>
              <p>
                <span> + </span>31 groups
              </p>
            </div>
            <div className="package-footer-item">
              <h1>Other</h1>
              <p>
                <span> + </span>Extensive SMS
              </p>
              <p>
                <span> + </span>3 users
              </p>
            </div>
          </div>
          <div className="package-btn">
            <button>CHOOSE A PACKAGE</button>
          </div>
        </div>
        <div className="package">
          <div className="package-title">
            <h1 className="orangeT">PREMIUM</h1>
            <p>Advanced functionalities</p>
            <p>and guarantee of the best results</p>
          </div>
          <div className="package-size">
            <p>
              Base Size: <span className="orangeT">10,000</span>
            </p>
          </div>
          <div className="package-price">
            <div className="package-price-title">
              <p>585.00</p>
              <div className="priceinfo">
                <p>PLN</p>
                <p>per month</p>
              </div>
            </div>
            <button className="orangeBtn">SELECT A PACKAGE</button>
          </div>
          <div className="package-footer">
            <div className="package-footer-item">
              <h1>EMAIL MARKETING</h1>
              <p>
                <span> + </span>Dynamic counters
              </p>
              <p>
                <span> + </span>Unlimited A / B / X tests
              </p>
              <p>
                <span> + </span>List of defined senders
              </p>
              <p>
                <span> + </span>Definable test group
              </p>
              <p>
                <span> + </span>Additional, personalized feet
              </p>
              <p>
                <span> + </span>SARE OG Tag plug
              </p>
            </div>
            <div className="package-footer-item">
              <h1>POLLS</h1>
              <p>
                <span> + </span>Conditioning questions
              </p>
              <p>
                <span> + </span>Paging the survey
              </p>
              <p>
                <span> + </span>Possibility to import your own template
              </p>
              <p>
                <span> + </span>50 questions
              </p>
            </div>
            <div className="package-footer-item">
              <h1>Address database</h1>
              <p>
                <span> + </span>9 database write interfaces
              </p>
              <p>
                <span> + </span>62 groups
              </p>
            </div>
            <div className="package-footer-item">
              <h1>Other</h1>
              <p>
                <span> + </span>Discount code campaigns
              </p>
              <p>
                <span> + </span>Dynamic reports
              </p>
              <p>
                <span> + </span>5 users
              </p>
            </div>
          </div>
          <div className="package-btn">
            <button className="orangeBtn">CHOOSE A PACKAGE</button>
          </div>
        </div>
        <div className="package">
          <div className="package-title">
            <h1 className>INDIVIDUAL</h1>
            <p>Solutions tailored</p>
            <p>to your needs</p>
          </div>
          <div className="package-size">
            <p>
              Base Size: <span>1,000</span>
            </p>
          </div>
          <div className="package-price">
            <div className="package-price-title">
              <p>INDIVIDUAL</p>
              <div className="priceinfo">
                <p>PLN</p>
                <p>per month</p>
              </div>
            </div>
            <button>CONTACT AN ADVISOR</button>
          </div>
          <div className="package-footer">
            <div className="package-footer-item">
              <h1>
                Do you have requirements that go beyond our standard offer?
                Contact us and we will prepare solutions dedicated to your
                individual needs
              </h1>
            </div>
          </div>
          <div className="package-btn">
            <button>CONTACT AN ADVISOR</button>
          </div>
        </div>

        <div className="pricelist-footer">
          <div className="pricelist-footer-title">
            <p>Additional system extensions available for purchase</p>
          </div>
          <div className="pricelist-footer-p">
            <p>
              <span> + </span>SMS (sending, personalization, link shortener)
            </p>
            <p>
              <span> + </span>Dedicated infrastructure
            </p>
            <p>
              <span> + </span>SMTP and sending transactional messages
            </p>
            <p>
              <span> + </span>Graphic creations
            </p>
            <p>
              <span> + </span>Handling of shipments by a Consultant
            </p>
            <p>
              <span> + </span> Mobile application for collecting addresses
            </p>
          </div>
        </div>
      </div>
      {/* *********************** */}
    </>
  );
}

export default PriceListHero;
