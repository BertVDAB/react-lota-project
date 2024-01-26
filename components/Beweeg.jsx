import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";

import "./beweeg.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";

import hero from "../img/beweeg/beweeg.jpg";
import beweeg1 from "../img/beweeg/2.jpg";
import beweeg2 from "../img/beweeg/3.jpg";
import beweeg3 from "../img/beweeg/4.jpg";
// import voedingsplannen from "../img/voedingsplannen.jpg";
import voedingsplannen from "../img/patterns/1.jpg";

export default function Beweeg() {
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
        <Hero id="leef-hero" title="beweeg." img={hero} />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="leef1"
          title="beweeg."
          text={
            <Fragment>
              Ik ben ervan overtuigd dat een gezond lichaam begint bij gezonde
              voeding. Maar om het meeste uit je gezonde levensstijl te halen,
              is het belangrijk om ook regelmatig te bewegen en actief te
              blijven.{" "}
              <strong>
                Het is geen vereiste, maar een leuke manier om uiting te geven
                aan je herwonnen energie.
              </strong>
            </Fragment>
          }
          img={beweeg1}
        />

        <Section
          id="leef2"
          title="holistische benadering."
          text={
            <Fragment>
              Samen kunnen we een holistische aanpak creëren om{" "}
              <strong>
                eenvoudig meer beweging te integreren in jouw dagelijkse leven.
              </strong>{" "}
              Met mijn kennis van voeding en gezondheid help ik jou bij het
              bereiken van je doelen en het opbouwen van een gezonde levensstijl
              die bij jou past.
            </Fragment>
          }
          img={beweeg2}
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          id="leef3"
          title="elke stap telt."
          text={
            <Fragment>
              Je zal voelen dat je gezonde levensstijl jou meer energie geeft,
              waardoor je vanzelf{" "}
              <strong>
                plezier vindt in het omzetten van je herwonnen energie in
                eenvoudige vormen van bewegen.
              </strong>{" "}
              Samen zoeken we naar een activiteit die je gemakkelijk kan
              integreren in jouw dagelijkse leven, bij jou thuis, zoals online
              fit lessen, wandelen met de hond, fietsen naar het werk, yoga,
              enz.{" "}
              <strong>
                Bij elke levensstijl past een vorm van beweging die jij
                zorgeloos elke dag opnieuw kan onderhouden.
              </strong>{" "}
              Daar ben ik van overtuigd en jij straks ook.
            </Fragment>
          }
          button="start vandaag"
          img={beweeg3}
          link="/contact"
        />
      </div>
    </>
  );
}
