import React from "react";
import "./Demo.css";
import meeting from "../images/meeting.jpg";
import play_btn from "../images/play-btn.png";

export default function Demo() {
  return (
    <div className='demo-outer-wrapper'>
      <div className='demo-inner-wrapper'>
        <div className='demo-img-wrapper'>
          <div className='demo-img-inner-wrapper'>
            <img className='meeting' src={meeting} alt='office meeting' />
            <img src={play_btn} alt='play button' className='play-btn' />
            <button className='demo-btn'>Watch a Demo</button>
          </div>
        </div>
        <div className='demo-text-wrapper'>
          <h1>
            Cohesive and <br /> coordinated campaigns
          </h1>
          <h4>In-product messages</h4>
          <p>
            Share automated messages with quick, conversational chats, or use
            attention-grabbing posts for more important updates.
          </p>
          <h4>Better customer experience</h4>
          <p>
            Convert more website visitors into customers with targeted messages,
            bots, and real-time chat.
          </p>
        </div>
      </div>
    </div>
  );
}
