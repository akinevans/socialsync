/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Navigation.css";
import { Link } from "react-scroll";
import Button_Orange from "./Button_Orange";

export default function Navigation() {
  return (
    <div className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <div className='title-wrapper'>
          <h1>SocialSync.</h1>
        </div>
        <div className='link-wrapper'>
          {/* Link tags from react-scroll package are essentially 'a' anchor tags */}
          <Link
            to='hero_component'
            spy={true}
            smooth={true}
            offset={-130}
            duration={800}
            className='link'
          >
            Home
          </Link>
          <Link
            to='product_services'
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className='link'
          >
            About
          </Link>
          <Link
            to='demo'
            spy={true}
            smooth={true}
            offset={-40}
            duration={800}
            className='link'
          >
            Demo
          </Link>

          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-40}
            duration={800}
            className='link'
          >
            Contact
          </Link>
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
