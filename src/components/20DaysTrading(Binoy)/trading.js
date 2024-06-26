import React from "react";
import "./trading.css";
import { Link } from "react-router-dom";
import binoy_image from "./binoy_class_image.jpg"
export default function SMCcourse() {
  return (
    <div className="trading_main_div">
      <div className="trading_profile_div">
        <div className="trading_profile_img">
            <img src={binoy_image} alt="" />
        </div>
        <div className="trading_course_desc">
            <h1>20 Days of Trading </h1>
            <p>Learn Complete basics of trading in 20 days  </p>
            <Link to='/payment'><button>Buy Course For Rs4000</button></Link>
        </div>
        
      </div>
      <div className="instructor_language">
            <p>Instructor : Binoy</p>
            <p>Language : Malayalam</p>
        </div>
    </div>
  );
}
