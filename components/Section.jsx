/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Section.css";

export default function Section(props) {
  return (
    <>
      {/* voedselbegeleiding
    aanpak
    voedingsplannen
    recepten
    partner
    benieuwd */}

      <div
        ref={props.refProp}
        className="flexbox"
        id={props.id}
        // initial={{ opacity: 0, y: +100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 2.5 }}
      >
        <div className="flex1">
          <div className="flex1--content">
            <h2>{props.title}</h2>
            {props.price ? <h2>{props.price}</h2> : null}

            {props.subtitle1 ? <h3>{props.subtitle1}</h3> : null}
            {props.subtitle2 ? (
              <h3 className="pb-2">{props.subtitle2}</h3>
            ) : null}
            <p>{props.text}</p>

            {props.blank ? (
              <a
                href="https://healthpoint.trainin.app/checkout/POLWO"
                target="_blank"
                rel="noreferrer"
              >
                <button>{props.button}</button>
              </a>
            ) : null}

            {props.link ? (
              <Link to={props.link}>
                <button>{props.button}</button>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex2">
          {/* <div className="flex2--content"> */}
          <img src={props.img} alt="" />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
