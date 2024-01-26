import { useEffect, useRef, useContext } from "react";

import TestimonialsListTop3 from "./TestimonialsListTop3";
import "./testimonialWritten.css";
import Video from "./Video";
import video from "../video/testimonials.mp4";

import { Context } from "../App";
import TestimonialsListTop3 from "./TestimonialsListTop3";

const TestimonialsWritten = () => {
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useContext(Context);
  // const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useState(false);
  const bgDarkDivsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if any div with class "bg-dark" is at the top of the viewport
      const isAnyDivAtTop = bgDarkDivsRef.current.some((div) => {
        const rect = div.getBoundingClientRect();
        return rect.top <= 45 && rect.bottom > 0;
      });

      setIsAnyBgDarkDivAtTop(isAnyDivAtTop);
    };

    // Attach the function to the scroll event for continuous monitoring
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgDarkDivsRef]);
  return (
    <>
      <Video video={video} title="Geschreven testimonials." />
      <div
        className="testimonials-written-container"
        ref={(el) => (bgDarkDivsRef.current[0] = el)}
      >
        <TestimonialsListTop3/>
      </div>
    </>
  );
};

export default TestimonialsWritten;
