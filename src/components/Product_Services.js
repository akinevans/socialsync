/* eslint-disable react/jsx-pascal-case */
import { React, useRef } from "react";
import PS_Card from "./PS_Card";
import "./Product_Services.css";
import convo from "../icons/conversation.svg";
import touch from "../icons/touch.svg";
import word_bubble from "../icons/word-bubble.png";
import { motion, useInView } from "framer-motion";

export default function Product_Services() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='product-services-outer-wrapper' id='product_services'>
      <div className='product-services-inner-wrapper'>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className=''
        >
          <PS_Card
            img={word_bubble}
            title='Chat in real-time'
            info="Set clear expectations with customers based on your team's bandwidth."
          />
        </motion.div>
        <motion.div
          // ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className=''
        >
          <PS_Card
            img={convo}
            title='Time with chat bots'
            info='Help users help themselves with powerful bots for support and sales'
          />
        </motion.div>
        <motion.div
          // ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className=''
        >
          <PS_Card
            img={touch}
            title='Action with integrate'
            info='Integrate with 300+ apps, or build your own. You can use them in conversations'
          />
        </motion.div>
      </div>
    </div>
  );
}
