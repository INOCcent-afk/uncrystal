import React from "react";
import "./ProductHero.scss";
import Edytory from "./images/edytory.svg";
import Onas4 from "./images/onas_4.svg";
import baza from "./images/baza.svg";
import Onas6 from "./images/onas_6.svg";
import integrace from "./images/integracje.svg";
import sarescript from "./images/sarescript.svg";
import paytpa from "./images/parytet-kopia-2.svg";
import dastar from "./images/dostarczalnosc.svg";
import fraction from "./images/function@3x-300x300.png";
import Onas3 from "./images/onas_3.svg";
import Personalize from "./images/personalizacja.svg";
import Podpisuj from "./images/podpisuj.svg";
import kanal from "./images/kanal_zwrotny.svg";
import raporty from "./images/raporty.svg";
import klicze from "./images/smscykliczne.svg";
import friction from "./images/function@3x-300x300.png";
import ana from "./images/anaizuj_skutecznosc.svg";
import Onas5 from "./images/onas_5.svg";
import Pyta from "./images/pytaj_o_czasie.svg";
import Badaj from "./images/badaj_jak_chcesz.svg";

function ProductHero() {
  return (
    <>
      <div className="product-hero">
        <p>Learn about SARE functionalities</p>
        <p>
          Effective campaigns are campaigns that use various solutions and
          tools. Choose the right one for your business and enjoy great results.
        </p>
      </div>
      <div className="product-cards-container">
        <div className="product-cards">
          <div className="product-cards-section">
            <div className="product-cards-section-title">
              <h1>EMAIL MARKETING</h1>
            </div>
            <div className="product-cards-section-container">
              <div className="product-card">
                <div className="product-card-p">
                  <h6>The ability to create unique creations</h6>
                  <p>
                    We provide various models for creating a creative: you can
                    use your finished newsletter if you have it in the form of
                    HTML code or in the URL. However, if you
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Edytory} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Building a relationship</h6>
                  <p>
                    The Uncrystal system allows you to effectively build
                    relationships through marketing automation tools. Recurring
                    and occasional shipments, follow up messages or
                    transactional emails
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Onas4} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Database segmentation - targeting</h6>
                  <p>
                    Good e-mail marketing strategy requires base segmentation.
                    Knowing the profile and preferences of your recipients, you
                    will better compose the content of the message. Targeting is
                    possible
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={baza} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Report analysis</h6>
                  <p>
                    Constant analysis of reports, i.e. campaign implementation
                    statistics, is important for the optimization of the
                    strategy and should be subject to constant verification. The
                    SARE system has an extensive module
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Onas6} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>A / B / X tests</h6>
                  <p>
                    The SARE system offers A / B / X tests to show the
                    effectiveness of given mailings, a creative test to check
                    how a given message will look on different devices
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={integrace} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>System customization</h6>
                  <p>
                    SAREscript is an open development platform, thanks to which
                    you can independently create new functionalities
                    corresponding to your current needs. In conjunction with
                    APIs and SOAP
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={sarescript} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Integrations</h6>
                  <p>
                    The SARE system has two interfaces for data exchange with
                    other applications. It is a REST API and SOAP API. Perfectly
                    integrates with social media tools, CRM system, Magento
                    platform
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={paytpa} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Control over deliverability</h6>
                  <p>
                    Thanks to the distributed architecture, we have achieved
                    efficiency that allows you to manage multi-million address
                    databases and send hundreds of thousands of messages per
                    hour.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={dastar} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Personalize your message</h6>
                  <p>
                    Precise targeting and personalization is the "to be or not
                    to be" of a marketing strategy. The SARE system enables
                    personalization by name, generation of unique rebate codes.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={fraction} alt="svg" />
                </div>
              </div>
            </div>
          </div>
          {/* ****** */}
          <div className="product-cards-section">
            <div className="product-cards-section-title">
              <h1>SMS</h1>
            </div>
            <div className="product-cards-section-container">
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Personalize your message</h6>
                  <p>
                    ARE allows you to send SMS messages with personalized
                    elements for customers. You can apply by name, propose a
                    unique promotion or invite a client
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Personalize} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>SMS branding</h6>
                  <p>
                    In communication with the client, introduce yourself and
                    your company: register the sender's name and send signed
                    messages - use SMS branding. The customer will not confuse
                    you with anyone else.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Podpisuj} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Bidirectional SMS</h6>
                  <p>
                    Use the return channel function and get responses to SMS
                    actions, and collect reports in SARE. Thanks to two-way
                    communication, you have the opportunity to increase the
                    efficiency of your activities.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={kanal} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Campaign optimization</h6>
                  <p>
                    Achieve even better results in the mobile channel! Thanks to
                    advanced reporting data, you will check the effectiveness of
                    your actions and the optimization of the campaign will be
                    possible.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={raporty} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Informing the client</h6>
                  <p>
                    Do you sell via the Internet? Use the option of automatic
                    transactional SMSs in SARE, sent immediately after
                    completing a specific action in the store. This is a great
                    opportunity to communicate
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={klicze} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Building relationships - recurring shipments</h6>
                  <p>
                    You can define automatic recurring shipments from the system
                    level. In this way, you will develop a permanent
                    relationship with the client and ensure the loyalty of the
                    recipient. For these activities also use.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Onas3} alt="svg" />
                </div>
              </div>
            </div>
          </div>
          {/* ****** */}
          <div className="product-cards-section">
            <div className="product-cards-section-title">
              <h1>SMTP</h1>
            </div>
            <div className="product-cards-section-container">
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Effectiveness analysis</h6>
                  <p>
                    Planning and implementation of a marketing campaign in our
                    system is possible from the level of Outlook, Thunderbird or
                    Windows Live Mail. When carrying out shipments using our
                    servers.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={ana} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Effectiveness analysis</h6>
                  <p>
                    Planning and implementation of a marketing campaign in our
                    system is possible from the level of Outlook, Thunderbird or
                    Windows Live Mail. When carrying out shipments using our
                    servers.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={ana} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Dedicated user permissions</h6>
                  <p>
                    When carrying out a shipment from the level of an e-mail
                    program, the sender has only a specific group of recipients
                    at his disposal in the SARE system, with whom he can contact
                    via the function.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={friction} alt="svg" />
                </div>
              </div>
            </div>
          </div>
          {/* ****** */}
          <div className="product-cards-section">
            <div className="product-cards-section-title">
              <h1>POLLS</h1>
            </div>
            <div className="product-cards-section-container">
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Individual customization of questions</h6>
                  <p>
                    Ask the customer relevant questions by customizing the
                    questions individually. It's easy in SARE, thanks to the
                    option to create a survey with conditional questions. Create
                    different variants.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Onas5} alt="svg" />
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-p">
                  <h6>Time optimization</h6>
                  <p>
                    Discover the possibilities of configuring a survey! Various
                    question options, dedicated survey appearance, embedding in
                    the body of an email, adding a question for an email address
                    and time optimization.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Pyta} alt="svg" />
                </div>
              </div>
              <div className="product-card flexStart">
                <div className="product-card-p">
                  <h6>Custom template</h6>
                  <p>
                    Do you have your own survey template? SARE allows you to
                    publish the survey not only according to the templates
                    available in the system, but also your own. Thanks to this,
                    they will be associated.
                  </p>
                </div>
                <div className="product-card-img">
                  <img src={Badaj} alt="svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHero;
