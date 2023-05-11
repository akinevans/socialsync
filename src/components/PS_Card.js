import React from "react";
import "./PS_Card.css";

export default function PS_Card(props) {
  return (
    <div className='pscard-wrapper'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
      <h3>
        Discover More <span className='arrow'>→</span>
      </h3>
    </div>
  );
}
