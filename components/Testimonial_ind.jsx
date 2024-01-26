/* eslint-disable react/prop-types */
import React from 'react'
import './Testimonial_ind.css'

import video from "../video/main.mp4";

function Testimonial_ind(props) {
  return (
    <>
      <div className="testimonial-ind-container" id={props.id}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Testimonial_ind