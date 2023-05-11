import React from "react";
import Quantity from "./Quantity";
import "./QuantitySpacer.css";

export default function QuantitySpacer() {
  return (
    <div className='quantity-spacer-outer-wrapper'>
      <div className='quantity-spacer-inner-wrapper'>
        <Quantity
          number='1.6x'
          text='Tickets when using the Socialsync messenger'
        />
        <Quantity
          number='90.7%'
          text='Socialsync customers see a median CSAT of 90.7%'
        />
        <Quantity
          number='37%'
          text='Lower time to resolution when using SocialSync'
        />
      </div>
    </div>
  );
}
