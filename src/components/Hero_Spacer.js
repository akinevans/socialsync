import React from "react";
import "./Hero_Spacer.css";

export default function Hero_Spacer(props) {
  return (
    <div className='hero-spacer-outer-wrapper'>
      <div className='hero-spacer-inner-wrapper'>
        <div className='hero-spacer-title-wrapper'>
          <h1 className='hero-spacer-title'>{props.title}</h1>
        </div>
        <div className='hero-spacer-text-wrapper'>
          <p className='hero-spacer-text'>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
