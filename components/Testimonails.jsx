import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import {Link} from "react-router-dom";

import { Context } from "../App";
import "./Testimonails.css";

import Testimonial_ind from "./Testimonial_ind";
import TestimonialWritten from "./TestimonialsWritten";
import TestimonialsListTop3 from "./TestimonialsListTop3";


import CarouselBox from "./CarouselBox";

import HeroBottom from "./HeroBottom";
import banner from "../img/banners/banner.png";

import Video from "./Video";
import video from "../video/testimonials.mp4";

function Testimonails() {
  const link = "https://www.bertverbanck.be/lore2024/";
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useContext(Context); // const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useState(false);
  const bgDarkDivsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      // Check if any div with class "bg-dark" is at the top of the viewport
      const isAnyDivAtTop = bgDarkDivsRef.current.some((div) => {
        const rect = div.getBoundingClientRect();
        return rect.top <= 45 && rect.bottom > 0;
      });

      setIsAnyBgDarkDivAtTop(isAnyDivAtTop);
    }; // Attach the function to the scroll event for continuous monitoring

    window.addEventListener("scroll", handleScroll); // Cleanup the event listener when the component unmounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgDarkDivsRef]);
  return (
    <>
      <Video video={video} title="testimonials." />
      <div
        ref={(el) => (bgDarkDivsRef.current[0] = el)}
        className="testimonials-top-wrapper"
      >
        <CarouselBox />
        <div className="testimonials-container mobile-show">
          <TestimonialsListTop3/>
        </div>
        <div className="testimonials-buttons-top">
          <Link to="/testimonials_geschreven">
            <button>Lees alle testimonials..</button>
          </Link>
        </div>

        <div className="testimonials-container">
          <h1>Bekijk de testimonials</h1>
          <Testimonial_ind
            title="Bjorn Christiaens, healthy boost"
            text="een boost in mijn parate kennis van gezonde voeding"
          />
          <Video
            clickToPlay={true}
            video="https://www.bertverbanck.be/lore2024/BJORNZETTA.mp4"
          />
        </div>
        <div className="testimonials-container">
          <Testimonial_ind title="Ester, healthy boost" text="Nog aan te vullen" />
          <Video
            clickToPlay={true}
            video="https://www.bertverbanck.be/lore2024/ESTHER.mp4"
          />
        </div>
        <div className="testimonials-container">
          <Testimonial_ind title="Liesbeth, healthy boost" text="Nog aan te vullen" />
          <Video
            clickToPlay={true}
            video="https://www.bertverbanck.be/lore2024/LIESBETH.mp4"
          />
        </div>
        <div className="testimonials-container">
          <Testimonial_ind title="Ilse, healthy boost" text="Nog aan te vullen" />
          <Video
            clickToPlay={true}
            video="https://www.bertverbanck.be/lore2024/ILSE.mp4"
          />
        </div>
      </div>
    </>
  );
}

export default Testimonails;
