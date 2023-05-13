import React from "react";
import "./Footer_Subscription.css";

export default function Footer_Subscription() {
  return (
    <div className='footer-sub-outer-wrapper'>
      <h3>SocialSync</h3>
      <p>
        Creating excellent customer experiences with the right e-commerce tech
        stack.
      </p>
      <div className='footer-sub-form-wrapper'>
        <form>
          <label>
            <input
              className='input-form'
              type='text'
              name='name'
              placeholder='Enter your email'
            />
          </label>
          <input className='input-btn' type='submit' value='Subscribe' />
        </form>
      </div>
    </div>
  );
}
