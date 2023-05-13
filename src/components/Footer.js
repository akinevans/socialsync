import React from "react";
import "./Footer.css";
import Footer_Subscription from "./Footer_Subscription";

export default function Footer() {
  return (
    <div className='footer-outer-wrapper'>
      <div className='footer-inner-wrapper'>
        {/* import components */}
        <Footer_Subscription />
      </div>
    </div>
  );
}
