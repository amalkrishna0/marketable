import React from "react";
import "./team.css";
import image1 from ".//Anugrah.jpg"
import image2 from ".//BINOY.jpg"
import image3 from ".//SANDY.jpg"
import image4 from ".//SREEKANTH.jpg"

export default function Team() {    
  return (
    <div class="team_main_container">
      <h2>MEET THE TEAM</h2>
      <div class="team_card_row">
        <div class="team_card"><img src={image2} alt="" /></div>
        <div class="team_card"><img src={image4} alt="" /></div>
        <div class="team_card"><img src={image3} alt="" /></div>
        <div class="team_card"><img src={image1} alt="" /></div>
      </div>
    </div>
  );
}
