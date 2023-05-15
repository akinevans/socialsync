/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Footer.css";
import Footer_Subscription from "./Footer_Subscription";
import Footer_Links from "./Footer_Links";

export default function Footer() {
  return (
    <div className='footer-outer-wrapper'>
      <div className='footer-inner-wrapper'>
        <div className='footer-sub-component-wrapper'>
          <Footer_Subscription />
        </div>
        <div className='footer-links-component-wrapper'>
          <Footer_Links
            title='Features'
            link1='Business Messenger'
            link2='Customizable Bots'
            link3='Automated Answers'
            link4='Product Tours'
          />
          <Footer_Links
            title='Resources'
            link1='Blog'
            link2='Watch a Demo'
            link3='Academy'
            link4='Webinars'
          />
          <Footer_Links
            title='Company'
            link1='About'
            link2='Customers'
            link3='Community Forum'
            link4='Careers'
          />
        </div>
      </div>
      <div className='credit-wrapper'>
        <a href='https://dribbble.com/hasan_ui_design' target='_blank'>
          UI Design by Hasan on Dribbble
        </a>
      </div>
    </div>
  );
}
