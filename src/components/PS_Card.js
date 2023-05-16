import { React, useRef } from "react";
import "./PS_Card.css";
import { motion, useInView } from "framer-motion";

export default function PS_Card(props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      // style={{
      //   transform: isInView ? "none" : "translateY(200px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      // }}
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
