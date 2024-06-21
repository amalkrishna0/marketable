import React from "react";
import "./whatoffer.css";
import video from "./video.png";
import message from "./chatting.png"
import community from "./group-users.png"
import list from "./list.png"
import medal from "./medals.png"
import book from "./open-book.png"
export default function WhatOffer() {
  return (
    <div className="main_what_offer_div">
      <div className="what_offer_div">
        <div className="main_heading_what_offer">What do we offer</div>
        <div className="what_offer_contents">
          <div className="left_content_what_offer">
            <img src={video} className="video_img" alt="" />
          </div>
          <div className="right_content_what_offer">
            <h3>Live learning</h3>
            <p>
              Learn live with top educators, chat with teachers and other
              attendees, and get your doubts cleared.
            </p>
          </div>
        </div>
        <div className="what_offer_contents">
          <div className="left_content_what_offer">
            <img src={book} className="video_img" alt="" />
          </div>
          <div className="right_content_what_offer">
            <h3>Structured learning</h3>
            <p>
              Our curriculum is designed by experts to make sure you get the
              best learning experience.
            </p>
          </div>
        </div>
        <div className="what_offer_contents">
          <div className="left_content_what_offer">
            <img src={community} className="video_img" alt="" />
          </div>
          <div className="right_content_what_offer">
            <h3>Community & Networking</h3>
            <p>
            Interact and network with like-minded folks from various backgrounds
            in exclusive chat groups.
            </p>
          </div>
        </div>
        <div className="what_offer_contents">
          <div className="left_content_what_offer">
            <img src={message} className="video_img" alt="" />
          </div>
          <div className="right_content_what_offer">
            <h3>Learn with the best</h3>
            <p>
            Stuck on something? Discuss it with your peers and the instructors
            in the inbuilt chat groups.
            </p>
          </div>
        </div>
        <div className="what_offer_contents">
          <div className="left_content_what_offer">
            <img src={list} className="video_img" alt="" />
          </div>
          <div className="right_content_what_offer">
            <h3>Practice tests</h3>
            <p>
            With the quizzes and live tests practice what you learned, and track
            your class performance.
            </p>
          </div>
        </div>
        <div className="what_offer_contents">
          <div className="left_content_what_offer">
            <img src={medal} className="video_img" alt="" />
          </div>
          <div className="right_content_what_offer">
            <h3>Get certified</h3>
            <p>
            Flaunt your skills with course certificates. You can showcase the
            certificates on LinkedIn with a click.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
