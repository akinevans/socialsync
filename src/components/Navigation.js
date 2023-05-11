import React from "react";
import "./Navigation.css";
import Button_Orange from "./Button_Orange";

export default function Navigation() {
  return (
    <div className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <div className='title-wrapper'>
          <h1>SocialSync.</h1>
        </div>
        <div className='link-wrapper'>
          <a href='/' className='link'>
            Demos
          </a>
          <a href='/' className='link'>
            About
          </a>
          <a href='/' className='link'>
            Blog
          </a>
          <a href='/' className='link'>
            Pages
          </a>
          <a href='/' className='link'>
            Contact
          </a>
        </div>
        <div className='nav-end-wrapper'>
          <a href='/' className='signin'>
            Sign in
          </a>
          <Button_Orange title='Get Started Free' />
        </div>
      </div>
    </div>
  );
}
