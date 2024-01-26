import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";

import "./leef.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";

import hero from "../img/banners/LEEF.png";
import leef1 from "../img/leef/1.jpg";
import leef2 from "../img/leef/2.png";
import leef3 from "../img/leef/3.jpg";
// import voedingsplannen from "../img/voedingsplannen.jpg";
import voedingsplannen from "../img/patterns/1.jpg";

export default function Leef() {
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
      <div id="leef-container">
        <Hero id="leef-hero" title="leef." img={hero} />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="leef1"
          title="smaakvol leven."
          text={
            <Fragment>
              Of je nu wilt afvallen, meer energie wilt hebben of gewoon
              gezonder wilt leven, ik sta voor je klaar. Met persoonlijke
              voedingsbegeleiding, op maat opgestelde voedingsplannen en
              eenvoudige, heerlijke recepten zorgen we samen voor{" "}
              <strong>
                een gezonde toekomst, waarin jij centraal staat, je optimaal
                voelt en kunt genieten van het leven.
              </strong>{" "}
              Als erkend diëtiste help ik jou op weg naar een gezonde
              levensstijl die je levenslang kan volhouden.{" "}
            </Fragment>
          }
          img={leef1}
        />

        <Section
          id="leef2"
          title="accepteer en omarm jouw lichaam."
          text={
            <Fragment>
              Een gezonde levensstijl draait om veel meer dan alleen maar
              gezonde voeding. Het gaat ook om het vinden van{" "}
              <strong>
                balans in je dagelijkse leven, het accepteren van je lichaam en
                hoe je je lichaam op een veilige manier kan laten zien.
              </strong>{" "}
              Als voedingsdeskundige help ik jou niet alleen bij het
              samenstellen van een gezond voedingspatroon, maar ook bij het
              vinden van jouw innerlijke balans en het omarmen van jouw lichaam
              door te kiezen voor wat jou gelukkig maakt. <br></br>
              <br />
              <strong>
                <a style={{ color: "white", textDecoration: "underline" }} href="/ontmoet">
                  Lees hier
                </a>{" "}
                hoe ik het vertrouwen in mijn eigen lichaam terugwon dankzij een
                gezonde levensstijl.
              </strong>
            </Fragment>
          }
          img={leef2}
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          id="leef3"
          title="360° aanpak."
          text={
            <Fragment>
              Mijn aanpak is gericht op het vinden van een evenwichtige en
              duurzame manier van eten die bij jou past. Geen rigide diëten of
              extreme maatregelen, maar een gezonde levensstijl die je op de
              lange termijn kunt volhouden,{" "}
              <strong>
                met ruimte voor jouw sociaal leven en perfect aansluit bij jouw
                gezinsleven.
              </strong>
            </Fragment>
          }
          button="lees de testimonials"
          img={leef3}
          link="/testimonials"
        />
      </div>
    </>
  );
}
