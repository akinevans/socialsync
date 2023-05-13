import React from "react";
import "./Footer_Links.css";

export default function Footer_Links(props) {
  return (
    <div className='footer-links-outer-wrapper'>
      <h3>{props.title}</h3>
      <a href='/'>{props.link1}</a>
      <a href='/'>{props.link2}</a>
      <a href='/'>{props.link3}</a>
      <a href='/'>{props.link4}</a>
    </div>
  );
}
