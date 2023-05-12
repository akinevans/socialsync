import React from "react";
import Button_Orange from "./Button_Orange";
import "./Contact.css";

export default function Contact() {
  return (
    <div className='contact-outer-wrapper'>
      <div className='contact-inner-wrapper'>
        <div className='contact-text-wrapper'>
          <h1>Want to talk to a marketing expert?</h1>
          <Button_Orange title='Contact Us' />
        </div>
      </div>
    </div>
  );
}
