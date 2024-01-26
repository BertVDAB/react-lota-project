import React from "react";
import { useState, Fragement } from "react";
import { useRef } from "react";

const TestimonialWrittenItem = ({ testimonials }) => {
  
  const { name, text } = testimonials;

  return (
    <>
      <ul>
        <li>Q: {name}</li>
        <li>A: {text}</li>
      </ul>
    </>
  );
};

export default TestimonialWrittenItem;
