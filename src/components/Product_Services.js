/* eslint-disable react/jsx-pascal-case */
import React from "react";
import PS_Card from "./PS_Card";
import "./Product_Services.css";
import convo from "../icons/conversation.svg";
import touch from "../icons/touch.svg";
import word_bubble from "../icons/word-bubble.png";

export default function Product_Services() {
  return (
    <div className='product-services-outer-wrapper'>
      <div className='product-services-inner-wrapper'>
        <PS_Card
          img={word_bubble}
          title='Chat in real-time'
          info="Set clear expectations with customers based on your team's bandwidth."
        />
        <PS_Card
          img={convo}
          title='Time with chat bots'
          info='Help users help themselves with powerful bots for support and sales'
        />
        <PS_Card
          img={touch}
          title='Action with integrate'
          info='Integrate with 300+ apps, or build your own. You can use them in conversations'
        />
      </div>
    </div>
  );
}
