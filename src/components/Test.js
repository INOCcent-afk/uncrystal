import React from "react";
import "./Test.scss";
import FirstPhone from "./images/phone.jpg";
import SecondPhone from "./images/ankietyy-1.jpg";

function Test() {
  return (
    <>
      <div className="test">
        <div className="test-one">
          <div className="test-one-wrapper">
            <div className="test-title">
              <h1>INTEGRATE ACTIVITIES WITH SMS</h1>
            </div>
            <div className="test-steps">
              <div className="test-step">
                <p>
                  <span>INCREASE the</span>
                  power of the message by using
                  <span>mobile marketing</span>
                </p>
              </div>
              <div className="test-step">
                <p>
                  <span>PERSONALIZE the</span>
                  sender and message
                  <span> content</span>
                </p>
              </div>
              <div className="test-step">
                <p>
                  <span>GIVE THE POSSIBILITY to</span>
                  reply
                  <span>to an SMS</span>
                </p>
              </div>
              <div className="test-step">
                <p>
                  <span>ANALYZE </span>
                  reports
                  <span>in real time</span>
                </p>
              </div>
              <button>TEST IT FOR FREE</button>
            </div>
          </div>
          <div className="test-img-container">
            <img src={FirstPhone} alt="Phone" />
          </div>
        </div>
        <div className="test-two">
          <div className="test-two-wrapper">
            <div className="test-title">
              <h1>USE THE POWER OF SURVEY TO BUILD CUSTOMER LOYALTY</h1>
            </div>
            <div className="test-steps">
              <div className="test-step">
                <p>
                  <span>FIND OUT</span>
                  customer opinions using
                  <span>the survey</span>
                </p>
              </div>
              <div className="test-step">
                <p>
                  <span>USE</span>
                  different types of questions
                </p>
              </div>
              <div className="test-step">
                <p>
                  <span>ENLARGE</span>
                  your customer base
                </p>
              </div>
              <div className="test-step">
                <p>
                  <span>OPTIMIZE </span>
                  activities based on
                  <span>reports</span>
                </p>
              </div>
              <button>TEST IT FOR FREE</button>
            </div>
          </div>
          <div className="test-img-container">
            <img src={SecondPhone} alt="Phone" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
