/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

import "./Hero.css";

export default function Hero(props) {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -400 }}
      // whileInView={{ opacity: 1, y:0 }}
      // transition={{ duration: 3.5 }}

      className="hero-wrapper"
      id={props.id}
      style={{
        backgroundImage: `url(${props.img})`
        // , backgroundColor: "black",
      }}
    >
      <div className="hero">
        <motion.div
          className="hero--content"
          // initial={{ y: 200 }}
          //   whileInView={{ y: 0 }}
          //   transition={{ duration: 3}}
        >
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          {props.button ? <button>{props.button}</button> : null}
        </motion.div>
      </div>
    </motion.div>
  );
}
