import React from "react";
import "./reason.css";
import bitcoin from "../Reason/Bitcoin3.png";
import bitcoin1 from "../Reason/Bitcoin1.png";

export default function Reason() {
  return (
    <div className="main_body_reason">
      <div className="left_body_reason">
        <h1>Why Should You Buy This Course?</h1>
        <div className="reason_points">
          <div className="reason_point">
            <img src="image1.jpg" alt="Image 1" />
            <div className="reason_point_detail">
              <h2>Learn from Scratch</h2>
              <p>
                Perfect for beginners , this course starts with the basics
                making it easy to understand even if you're entirely new to
                crypto trading
              </p>
            </div>
          </div>
          <div className="reason_point">
            <img src="image1.jpg" alt="Image 1" />
            <div className="reason_point_detail">
              <h2>Expert Guidance</h2>
              <p>
                You'll benefit from expert knowledge, simplifying complex topics
                and guiding you through every step in a straightforward manner.
              </p>
            </div>
          </div>
          <div className="reason_point">
            <img src="image1.jpg" alt="Image 1" />
            <div className="reason_point_detail">
              <h2>Practical Learning</h2>
              <p>
                Dive into real-life examples and exercises, gaining hands-on
                experience that builds your confidence for actual trading.
              </p>
            </div>
          </div>
          <div className="reason_point">
            <img src="image1.jpg" alt="Image 1" />
            <div className="reason_point_detail">
              <h2>Stay Safe.</h2>
              <p>
                Discover essential risk management tips,ensuring you can make
                informed decisions while navigating the ups and downs of crypto
                markets.
              </p>
            </div>
          </div>
          <div className="reason_point">
            <img src="image1.jpg" alt="Image 1" />
            <div className="reason_point_detail">
              <h2>Premium Community Access</h2>
              <p>
                Lifetime free access to our exclusive members only discord
                Community section and Telegram channel were our Master traders
                post their Technical Analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right_body_reason">
        <img className="bitcoin1" src={bitcoin1} alt="" />
        <img className="bitcoin" src={bitcoin} alt="" />
      </div>
    </div>
  );
}
