/* eslint-disable react/prop-types */
import React, { useRef } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./HeroBottom.css";


export default function HeroBottom(props) {
  return (
    <div
      // initial={{ y: +100 }}
      // whileInView={{ y: 0 }}
      // transition={{ duration: 3.5 }}
      ref={props.refProp}
      className="hero-wrapper hero-bottom"
      id={props.id}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="hero hero-banner">
        <div
          className="hero--content"
          // initial={{ y: 200 }}
          // whileInView={{ y: 0 }}
          // transition={{ duration: 3 }}
        >
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <Link to={props.link}>
            {props.button ? <button>{props.button}</button> : null}
          </Link>
        </div>
      </div>
    </div>
  );
}
