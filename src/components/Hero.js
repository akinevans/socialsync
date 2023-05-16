/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { delay, motion } from "framer-motion";
import "./Hero.css";
import Button_Orange from "./Button_Orange";
import Button_White from "./Button_White";
import five_star from "../icons/five-star.svg";
import one_star from "../icons/one_star.svg";

export default function Hero() {
  return (
    <div className='hero-outer-wrapper' id='hero_component'>
      <div className='hero-inner-wrapper'>
        <motion.div
          // whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className='hero-title'
        >
          <h1>Customer messaging that fits your business</h1>
        </motion.div>
        <motion.div
          // whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
          className='hero-body-text'
        >
          <p>
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
        </motion.div>
        <motion.div
          // whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
          className='hero-button-wrapper'
        >
          <Button_Orange title='Start 14 Day Free Trial' />
          <Button_White title='Watch A Demo' />
        </motion.div>
        <motion.div
          // whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.25 }}
          className='hero-review-wrapper'
        >
          <img src={one_star} alt='green star' className='one-star' />
          <p>
            <span className='review-title'>Trustpilot </span>
            {/* Import star Icons */}
            <img className='five-star' src={five_star} alt='five star rating' />

            <span className='end-review'>4900+ 5 Stars</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
