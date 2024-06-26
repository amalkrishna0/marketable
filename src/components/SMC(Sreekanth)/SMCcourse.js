import React from "react";
import "./smccourse.css";
import { Link } from "react-router-dom";
import sreekanth_image from "./sreekanth_class_image.jpg"
export default function SMCcourse() {
  return (
    <div className="smc_main_div">
      <div className="smc_profile_div">
        <div className="smc_profile_img">
            <img src={sreekanth_image} alt="" />
        </div>
        <div className="smc_course_desc">
            <h1>Zero to Hero: Mastering SMC(Smart Money Concepts) – Advanced Trading Concepts   </h1>
            <p>From Zero to Hero: Mastering Trading</p>
            <Link to='/payment'><button>Buy Course For Rs3000</button></Link>
        </div>
        
      </div>
      <div className="instructor_language">
            <p>Instructor : Sreekanth K</p>
            <p>Language : Malayalam</p>
        </div>
    </div>
  );
}
