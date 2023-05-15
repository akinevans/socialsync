import { React, useRef } from "react";
import group1 from "../images/group1.webp";
import group2 from "../images/group2.webp";
import "./Pros.css";
import { motion, useInView } from "framer-motion";

export default function Pros() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='pros-outer-wrapper'>
      <div className='pros-inner-wrapper'>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className='section-one-wrapper'
        >
          <div className='section-one-img-wrapper'>
            <img src={group1} alt='' />
          </div>
          <div className='section-one-text-wrapper'>
            <h1>Everyone wins with a conversational approach</h1>
            <p>
              Engage customers at the exact moment they're ready to buy, whether
              on your website or in your app.
            </p>
            <p>
              SocialSync connects your tools and workflows so you can
              communicate personally at scale{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
          className='section-two-wrapper'
        >
          <div className='section-two-text-wrapper'>
            <h1>
              We help you to grow <br />
              faster and better
            </h1>
            <p>
              Phone and email only? Give your customers more. Intercom has
              convenient whenever, whenever messaging that works in app, online,
              and on mobile for super quick and easy support.
            </p>
            <p>
              For all those times your customers waited to reach someone on your
              team.
            </p>
          </div>
          <div className='section-two-img-wrapper'>
            <img src={group2} alt='' />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
