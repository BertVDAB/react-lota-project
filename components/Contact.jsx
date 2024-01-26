import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";
import "./Contact.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Hero from "./Hero";
import hero from "../img/banners/banner.png";

import HeroBottom from "./HeroBottom";
// import banner from "../img/banners/banner.png"
import banner from "../img/patterns/1.jpg";
import { color } from "framer-motion";

import contact1 from "../img/contact/1.jpg";
import contact2 from "../img/contact/2.jpg";

import Video from "./Video";
import video from "../img/contact/hero_video.mp4";

export default function Contact() {
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
      <div className="contact-container">
        <Video
          title={
            <Fragment>
              steeds welkom <br /> in mijn praktijk <br /> of online.
            </Fragment>
          }
          video={video}
        />
        {/* <Hero
          id="leef-hero"
          title="steeds welkom 
in mijn praktijk 
of online."
          img={hero}
        /> */}

        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="contact"
          title="gratis 
gezondheidsgesprek."
          text="Laat ons samenwerken om jouw gezondheid en welzijn te verbeteren. Neem gerust contact met me op voor een vrijblijvend gesprek en laten we bespreken hoe we samen aan de slag kunnen gaan om jouw doelen te bereiken. 
Ik kijk er naar uit om van je te horen.

"
          img={contact1}
          button="Boek hier jouw gratis gezondheidsgesprek"
          blank="https://healthpoint.trainin.app/checkout/POLWO"
        />

        <div
        ref={(el) => (bgDarkDivsRef.current[1] = el)}
        className="flexbox contact-container">
          <div className="flex1">
            <div className="flex1--content">
              <h2>wens je meer info of een afspraak?</h2>
              <p>
                Wil je meer info over mijn trajecten of heb je interesse om
                samen te werken? Maak vrijblijvend een afspraak en wij
                contacteren jou zo snel mogelijk.
              </p>

              {/* <a
                href="https://us8.list-manage.com/contact-form?u=50e4a72d82071c45e7acfeca4&form_id=3a23f90dc6f235264c41c812bebd3805"
                target="blank"
              >
                <button>Klik hier om het contact form te openen</button>
              </a> */}

              <iframe
                src="https://us8.list-manage.com/contact-form?u=50e4a72d82071c45e7acfeca4&form_id=3a23f90dc6f235264c41c812bebd3805"
                scrolling="no"
              ></iframe>

              {/* <form action="">
                <input
                  type="text"
                  placeholder="Jouw naam en voornaam*"
                  aria-required="true"
                  required
                />
                <input
                  type="email"
                  placeholder="Jouw e-mailadres*"
                  aria-required="true"
                  required
                />
                <input
                  type="tel"
                  placeholder="Jouw telefoonnummer*"
                  aria-required="true"
                  required
                />
                <input
                  type="text"
                  placeholder="Jouw vraag*"
                  aria-required="true"
                  required
                />
                

                <input type="submit" name="submit" value="verzenden" />
              </form> */}
            </div>
          </div>
          <div className="flex2">
            <div className="flex2--content">
              <img src={contact2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
