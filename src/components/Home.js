import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="main_home_body">
      <div className="main_profile">
      <div  alt="Bitcoin" className="bitcoin_image1" />
      <div  alt="Bitcoin" className="bitcoin_image2" />

      </div>
      <div className="body">
        <h2>OUR COURSES</h2>
        <div className="cards">
          <div className="card1">
            <div className="card1_content">
              <div className="image1"></div>
              <div className="content1">CRYPTO TRADING SERIES FOR BEGINNERS</div>
              <div className="price1"></div>
            </div>
          </div>
          <div className="card2">
            <div className="card2_content">
              <div className="image2"></div>
              <div className="content2">LEARNING CRYPTO TRADING FROM SCRATCH IN 20 DAYS</div>
              <div className="price2"></div>
            </div>
          </div>
          <div className="card3">
            <div className="card3_content">
              <div className="image3"></div>
              <div className="content3">ZERO TO HERO:MASTERING SMC ADVANCED TRADING CONCEPTS</div>
              <div className="price3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
