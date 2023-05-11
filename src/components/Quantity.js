import React from "react";
import "./Quantity.css";

export default function Quantity(props) {
  return (
    <div className='quantity-wrapper'>
      <h1>{props.number}</h1>
      <p>{props.text}</p>
    </div>
  );
}
