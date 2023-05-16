/* eslint-disable react/jsx-pascal-case */
import { React, useRef } from "react";
import Button_Orange from "./Button_Orange";
import "./Contact.css";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='contact-outer-wrapper' id='contact'>
      <div className='contact-inner-wrapper'>
        <div className='contact-text-wrapper'>
          <h1>Want to talk to a marketing expert?</h1>
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className=''
          >
            <Button_Orange title='Contact Us' />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
