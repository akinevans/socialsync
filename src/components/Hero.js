/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Hero.css";
import Button_Orange from "./Button_Orange";
import Button_White from "./Button_White";
import five_star from "../icons/five-star.svg";
import one_star from "../icons/one_star.svg";

export default function Hero() {
  return (
    <div className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-title'>
          <h1>
            Customer messaging <br /> that fits your business
          </h1>
        </div>
        <div className='hero-body-text'>
          <p>
            Transform the way you work with one place for everyone <br /> and
            everything you need to get stuff done.
          </p>
        </div>
        <div className='hero-button-wrapper'>
          <Button_Orange title='Start 14 Day Free Trial' />
          <Button_White title='Watch A Demo' />
        </div>
        <div className='hero-review-wrapper'>
          <img src={one_star} alt='green star' className='one-star' />
          <p>
            <span className='review-title'>Trustpilot </span>
            {/* Import star Icons */}
            <img className='five-star' src={five_star} alt='five star rating' />

            <span className='end-review'>4900+ 5 Stars</span>
          </p>
        </div>
      </div>
    </div>
  );
}
