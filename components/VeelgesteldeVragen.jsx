import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";
import { faqs } from "./faqData";
import Accordion from "./Accordion";
import Hero from "./Hero";

import hero from "../img/faq/hero.jpg";

import HeroBottom from "./HeroBottom";
// import banner from "../img/banners/banner.png";
import banner from "../img/patterns/1.jpg";

import "./VeelgesteldeVragen.css";

export default function VeelgesteldeVragen() {
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
      <Hero
        id="faq-hero"
        title={
          <Fragment>
            veelgestelde<br></br>vragen.
          </Fragment>
        }
        img={hero}
      />
      <div
        ref={(el) => (bgDarkDivsRef.current[0] = el)}
      className="faq-container">
        <Accordion />
        {/* <hr /> */}
      </div>
    </>
  );
}
