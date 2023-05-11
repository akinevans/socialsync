import React from "react";
import group1 from "../images/group1.webp";
import group2 from "../images/group2.webp";
import "./Pros.css";

export default function Pros() {
  return (
    <div className='pros-outer-wrapper'>
      <div className='pros-inner-wrapper'>
        <div className='section-one-wrapper'>
          <div className='section-one-img-wrapper'>
            <img src={group1} alt='' />
          </div>
          <div className='section-one-text-wrapper'>
            <h1>Everyone wins with a conversational approach</h1>
            <p>
              Engage customers at the exact moment they're ready to buy,
              <br />
              whether on your website or in your app.
            </p>
            <p>
              Socialsync connects your tools and workflows so you can
              communicate <br />
              personally at scale{" "}
            </p>
          </div>
        </div>
        <div className='section-two-wrapper'>
          <div className='section-two-text-wrapper'>
            <h1>
              We help you to grow <br />
              faster and better
            </h1>
            <p>
              Phone and email only? Give your customers more. Intercom has
              <br />
              convenient whenever, whenever messaging that works in app, online,
              <br />
              and on mobile for super quick and easy support.
            </p>
            <p>
              For all those times your customers waited to reach someone on your
              team.
            </p>
          </div>
          <div className='section-two-img-wrapper'>
            <img src={group2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}