import React from "react";
import "./Steps.scss";
import StepImg from "./images/1.png";
import { Link } from "react-router-dom";

function Steps() {
  const btnStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  };
  return (
    <>
      <div className="steps">
        <div className="steps-title">
          <h1>4 quick steps to an effective SARE mailing campaign</h1>
        </div>
        <div className="step-demo-container">
          <div className="steps-demo">
            <div className="step">
              <div className="step-num">
                <h1>1</h1>
              </div>
              <div className="step-p">
                <p>
                  Create your audience base. Import a list of contacts, assign
                  them features, conduct communication based on segmentation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                <h1>2</h1>
              </div>
              <div className="step-p">
                <p>
                  Prepare mailing. Use the Drag & Drop editor and an extensive
                  library of ready-made newsletter templates.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                <h1>3</h1>
              </div>
              <div className="step-p">
                <p>
                  Birthday, transaction, optimization, autoresponders - check
                  how easy it is to create them in SARE.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                <h1>4</h1>
              </div>
              <div className="step-p">
                <p>
                  Analyzing campaign performance is crucial to optimizing your
                  performance. The report module in SARE will allow you to
                  create an individual profile of your recipient.
                </p>
              </div>
            </div>
          </div>
          <div className="steps-img">
            <img src={StepImg} alt="StepImg" />
          </div>
        </div>
        <button>
          <Link style={btnStyle} to="/contact">
            CONTACT
          </Link>
        </button>
      </div>
    </>
  );
}

export default Steps;
