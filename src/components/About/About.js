import React from "react";
import "./about.css";
import instagram from "./instagram.png"
import discord from "./discord.png"
import twitter from "./twitter.png"
import linkedin from "./linkedin.png"
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about_main_div">
      <div className="marketable_head">
        <p1>MARKETABLE</p1>
        <p2>You don't need any prior trading experience to enroll in this course.</p2>
        <p2>All our courses are designed to be beginner-friendly, ensuring a smooth learning hourney right from the basics</p2>
      </div>
      <div className="social_meadia">
        <img src={instagram} className="instagram_icon" alt=""/>
        <img src={discord} className="instagram_icon" alt=""/>
        <img src={twitter} className="instagram_icon" alt=""/>
        <img src={linkedin} className="instagram_icon" alt=""/>

      </div>
      <div className="about_down_div">
        <div className="about_about">
            <p1><b>About</b></p1>
            <p2>Our Team</p2>
            <p2><Link to='fdfd'>Brand Guidelines</Link></p2>
            <p2><Link to='dsds'>Terms&Condition</Link></p2>
            <p2><Link to='marketable_private_policy'>Private Policy</Link></p2>
        </div>
        <div className="about_services">
            <p1><b>Services</b></p1>
            <p2>How to Order</p2>
            <p2>Our Courses</p2>
            <p2>Order Status</p2>
            <p2>Promo</p2>
            <p2>Payment Method</p2>
        </div>
        
      </div>
    </div>
  );
}
