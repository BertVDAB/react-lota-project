import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";
// import Link from "react-router-dom";

import "./Eet.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";

import hero from "../img/banners/EET.png";
// import heroBottom from "../img/banners/banner.png";
import heroBottom from "../img/patterns/1.jpg";
import eet1 from "../img/eet/1.jpg";
import eet2 from "../img/eet/2.jpg";
import eet3 from "../img/eet/3.jpg";
import eet4 from "../img/eet/4.png";
import eet5 from "../img/eet/5.jpg";

export default function Eet() {
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
      <div id="eet-container">
        <Hero id="eet-hero" title="eet." img={hero} />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="eet1"
          title="eet."
          text={
            <Fragment>
              Mijn aanpak, die ook de mijne is om mijn gezonde levensstijl te
              onderhouden, is{" "}
              <strong>
                gebaseerd op wetenschappelijke kennis en jarenlange ervaring.
              </strong>{" "}
              Ik werk niet met rigide voedingsplannen of strenge diëten. In
              plaats daarvan bied ik{" "}
              <strong>
                persoonlijke voedingsbegeleiding die is afgestemd op jouw
                behoeften en voorkeuren.
              </strong>
            </Fragment>
          }
          img={eet1}
        />

        <Section
          id="eet2"
          title="de lota way of life™️."
          text={
            <Fragment>
              Ik geloof dat gezonde voeding de sleutel is tot een gezond en
              gelukkig leven. Als diëtiste help ik jou om jouw gezondheidsdoelen
              te bereiken en te behouden door middel van{" "}
              <strong>
                1-op-1 coaching en op maat gemaakte, seizoensgebonden
                voedingsplannen op basis van mijn eigen recepten.
              </strong>{" "}
              Om het jou zo gemakkelijk mogelijk te maken, voorzie ik bij elk
              voedingsplan een{" "}
              <strong>
                boodschappenlijst samen met tips en tricks om nog steeds te
                genieten van je wekelijkse sociale uitjes..
              </strong>
            </Fragment>
          }
          button="lees meer"
          img={eet2}
          link="/aanbod"
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          id="eet3"
          title="360° aanpak."
          text={
            <Fragment>
              Mijn aanpak is gericht op het vinden van een evenwichtige en
              duurzame manier van eten die bij jou past. Geen rigide diëten of
              extreme maatregelen, maar een gezonde levensstijl die je op de
              lange termijn kunt volhouden, met{" "}
              <strong>
                ruimte voor jouw sociaal leven en perfect aansluit bij jouw
                gezinsleven.
              </strong>
            </Fragment>
          }
          button="lees de testimonials"
          img={eet3}
          link="/testimonials"
        />

        <Section
          id="eet4"
          title="op maat gemaakte voedingsplannen voor jouw doelen."
          text={
            <Fragment>
              Gedurende jouw begeleiding ontvang je van mij{" "}
              <strong>
                maandelijks een voedingsplan dat past bij jouw levensstijl en
                doelen.
              </strong>{" "}
              Of je nu wilt afvallen, meer energie wilt hebben, of gewoon
              gezonder wilt leven, ik kan je helpen om jouw doelen te bereiken.
              Met mijn expertise en ervaring weet ik welke voedingsmiddelen en
              maaltijden het beste zijn om jouw doel te behalen en behouden.{" "}
              <strong>
                Ik houd rekening met jouw smaak, voorkeuren en levensstijl,
                zodat het plan goed bij je past.
              </strong>
            </Fragment>
          }
          button="bekijk een voorbeeld van een maandmenu"
          img={eet4}
          // BUTTON???
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[2] = el)}
          id="eet5"
          title="eenvoudige, heerlijke recepten om van te genieten."
          text={
            <Fragment>
              <strong>
                Gezonde voeding hoeft niet saai of smakeloos te zijn.
              </strong>{" "}
              Ik help je om te genieten van gezonde, voedzame en smakelijke
              maaltijden die <strong>gemakkelijk te bereiden</strong> zijn. Ik
              deel graag mijn favoriete recepten met je, van gezonde ontbijtjes
              en lunchgerechten tot smakelijke avondmaaltijden en snacks. Met
              mijn tips en advies kun je genieten van gezond eten zonder afbreuk
              te doen aan smaak en plezier. Lees{" "}
              <a href="/testimonials">hier</a> wat jouw voorgangers ervan
              vonden.
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          img={eet5}
          link="/contact"
        />
      </div>
    </>
  );
}
