import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Link } from "react-router-dom";
import { testimonials } from "./testimonialsData";

const TestimonialsList = () => {
  return (
    <>
      <ul className="testimonial-list">
        {testimonials.map((testimonial) => (
          <ul className="testimonial-list-item" key={testimonial.id}>
            <img className="testimonial-img" src={testimonial.image} alt="" />
            {testimonial.text ? (
              <li className="testimonial-text">{testimonial.text}</li>
            ) : null}

            <li className="testimonial-name">{testimonial.name}</li>
            {testimonial.description ? (
              <li className="testimonial-description">
                {testimonial.description}
              </li>
            ) : null}

            {testimonial.program == "healthy boost" ? (
              <Link
                style={{ textDecoration: "underline", color: "black" }}
                to="/healthyboost"
              >
                <li className="testimonial-program">{testimonial.program}</li>
              </Link>
            ) : null}
            {testimonial.program == "fit4life" ? (
              <Link
                style={{ textDecoration: "underline", color: "black" }}
                to="/fit4life"
              >
                <li className="testimonial-program">{testimonial.program}</li>
              </Link>
            ) : null}
            {testimonial.program == "healthy boost met verlenging" ? (
              <Link
                style={{ textDecoration: "underline", color: "black" }}
                to="/healthyboost"
              >
                <li className="testimonial-program">{testimonial.program}</li>
              </Link>
            ) : null}
          </ul>
        ))}
      </ul>
    </>
  );
};

// USE COUNT FOR TESTIMONIALS
// const TestimonialsList = () => {
//   const firstThreeTestimonials = testimonials.slice(0, 3);

//   return (
//     <ul>
//       {firstThreeTestimonials.map((testimonial) => (
//         <li key={testimonial.id}>
//           <h3>{testimonial.name}</h3>
//           <p>{testimonial.message}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default TestimonialsList;
