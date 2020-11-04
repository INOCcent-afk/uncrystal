import React from "react";
import "./Stats.scss";
import StatsImg from "./images/samolot.jpg";

function Stats() {
  return (
    <>
      <div className="stats">
        <div className="stats-title">
          <h1>Why is it worth choosing the UNCRYSTAL system?</h1>
        </div>
        <div className="stats-content">
          <div className="stats-content-items">
            <span>41 %</span>
            <p>Gross Open Rate in the shipment from SAREsystem reaches</p>
          </div>
          <div className="stats-content-items">
            <span>17 %</span>
            <p>it generates unique CTRs in mailings</p>
          </div>
          <div className="stats-content-items">
            <span>301</span>
            <p>functions in one mailing system improves your efficiency</p>
          </div>
          <div className="stats-content-items">
            <span>∞</span>
            <p>
              an infinite number of possibilities available in the unique
              SAREscript solution supports your sales
            </p>
          </div>
        </div>
        <button>TRY IT FOR FREE</button>
        <div className="stats-bg">
          <img src={StatsImg} alt="airplane" />
        </div>
      </div>
    </>
  );
}

export default Stats;
