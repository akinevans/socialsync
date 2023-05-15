import React from "react";
import "./PS_Card.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PS_Card(props) {
  return (
    <motion.div
      // whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
      whileHover={{
        scale: 1.1,
        // transition: { duration: 0.2 },
      }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className='pscard-wrapper'
    >
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <p>{props.info}</p>

      <a href='/'>
        Discover More <span className='arrow'>→</span>
      </a>
    </motion.div>
  );
}
