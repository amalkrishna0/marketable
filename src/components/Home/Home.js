import React from "react";
import "./home.css";
import profile from ".//Head.png";
import course1 from ".//BINOY.jpg";
import course2 from ".//SREEKANTH.jpg";
export default function Home() {
  return (
    <div className="main_home_body">
      <div className="profile">
        <img src={profile} alt="Profile" />
      </div>
      <div className="courses">
        <div className="course">
            <img src={course1} alt="Course 1" />
            <div className="base">
            <div className="caption-content">
              <p>CRYPTO TRADING<br></br> SERIES FOR BEGINNERS</p>
              <h4>FREE</h4>
              <h4>FREE</h4>

            </div>
          </div>
        </div>
        <div className="course">
          <img src={course1} alt="Course 2" />
          <div className="caption-content">
            <p>LEARN CRYPTO TRADING FROM SCRATCH IN 20 DAYS</p>
            <h4 className="strike">Rs 6000</h4>
            <h4 className="non-strike"> Rs 4000</h4>
          </div>
        </div>
        <div className="course">
          <img src={course2} alt="Course 3" />
          <div className="caption-content">
            <p>ZERO TO HERO: MASTERING SMC ADVANCED TRADING CONCEPTS</p>
            <h4 className="strike">Rs 4000</h4>
            <h4 className="non-strike"> Rs 3000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
