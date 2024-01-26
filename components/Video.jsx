/* eslint-disable react/prop-types */
import React from "react";


import "./Video.css";

export default function Video(props) {
  return (
    <>
      <div className="video-wrapper" ref={props.refProp}>
        { props.title ? <h1 className="video-title">{props.title}</h1> : null }
        
        {/* add autoPlay to play! */}
        {props.clickToPlay ? (
          <video loop controls>
            <source src={props.video} type="video/mp4" />
            <div className="video-title">{props.title}</div>
          </video>
        ) : (
          <video autoPlay loop muted controls>
            <source src={props.video} type="video/mp4" />
          </video>
        )}
      </div>
    </>
  );
}
