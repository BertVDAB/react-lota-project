import { testimonials } from "./testimonialsData";

const TestimonialsListTop3 = () => {
    const firstThreeTestimonials = testimonials.slice(0, 3);
  return (
    <>
      <ul className="testimonial-list">
        {firstThreeTestimonials.map((testimonial) => (
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

            {testimonial.program ? (
              <li className=" testimonial-program">{testimonial.program}</li>
            ) : // HIERONDER NOG MEER INFO MET LINK NAAR PROGRAMMA PAGINA
            null}
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

export default TestimonialsListTop3;
