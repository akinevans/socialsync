import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-title'>
          <h1>Customer messaging that fits your business</h1>
        </div>
        <div className='hero-body-text'>
          <p>
            Transform the way you work with one place for everyone <br /> and
            everything you need to get stuff done.
          </p>
        </div>
        <div className='hero-button-wrapper'>
          <button className='btn-one'>Start 14 Day Free Trial</button>
          <button className='btn-two'>Watch A Demo</button>
        </div>
        <div className='hero-review-wrapper'>
          <p>
            <span className='review-title'>Trustpilot </span>
            4900+ 5 Stars
          </p>
        </div>
      </div>
    </div>
  );
}
