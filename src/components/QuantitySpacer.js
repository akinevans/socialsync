import { React, useRef } from "react";
import Quantity from "./Quantity";
import "./QuantitySpacer.css";
import { motion, useInView } from "framer-motion";

export default function QuantitySpacer() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='quantity-spacer-outer-wrapper'>
      <div className='quantity-spacer-inner-wrapper'>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className=''
        >
          <Quantity
            number='1.6x'
            text='Tickets when using the SocialSync messenger'
          />
        </motion.div>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className=''
        >
          <Quantity
            number='90.7%'
            text='SocialSync customers see a median CSAT of 90.7%'
          />
        </motion.div>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className=''
        >
          <Quantity
            number='37%'
            text='Lower time to resolution when using SocialSync'
          />
        </motion.div>
      </div>
    </div>
  );
}
