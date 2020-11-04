import React from "react";
import "./VsCode.scss";
import VscodeBg from "./images/vscode.png";

function VsCode() {
  return (
    <>
      <div className="vscode-hero">
        <div className="vscode-card">
          <div className="vscode-card-content">
            <h1>SARE for developers</h1>
            <p>
              <span>CREATE</span> new functions in the system adjusted to the
              behavior of your customers
            </p>
            <p>
              <span>INTEGRATE</span> via API and SOAP
            </p>
            <p>
              <span>WRITE SCRIPTS to</span> change the content of e-mails
            </p>
            <p>
              <span>PERSONALIZE AND SURPRISE</span> your audience
            </p>
            <button>TRY FOR FREE</button>
          </div>
        </div>
        <div className="vscode-card-img">
          <img src={VscodeBg} alt="vscodeBg" />
        </div>
      </div>
    </>
  );
}

export default VsCode;
