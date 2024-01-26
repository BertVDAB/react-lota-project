import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";

import Section from "./Section";
import Hero from "./Hero";

import "./home.css";
import HeroBottom from "./HeroBottom";
import "./fit4life.css";

import hero from "../img/aanbod/hero.jpg";
import heroBottom from "../img/betekenen.jpg";

import banner from "../img/banners/banner.png";

import fit4life1 from "../img/aanbod/3.jpg";
import fit4life2 from "../img/aanbod/fit4life/2.jpg";
import home3 from "../img/recepten.jpg";
import home4 from "../img/partner.jpg";

import Video from "./Video";
import video from "../video/main.mp4";

export default function Fit4life() {
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
        id="aanbod-hero"
        title={
          <Fragment>
            life is your buffet,<br></br>enjoy it<br></br> any way you can.
          </Fragment>
        }
        img={hero}
      />

      <div id="fit4life-container">
        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="home1"
          class="fit4life fit4life1"
          title="fit4life."
          subtitle1="€1695/programma"
          subtitle2="12 betalingen aan €151/maand "
          text={
            <Fragment>
              Wil je je levensstijl een complete ommezwaai geven en zoek je
              daarbij begeleiding op maat? Dan is fit4life{" "}
              <strong>
                jouw ideale metgezel om de lota way of life™️, your way of life
                te maken
              </strong>{" "}
              en nadien{" "}
              <strong>
                het heft in eigen handen te nemen om zelf de ingrediënten voor
                een lang gezond leven samen te stellen.
              </strong>
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={fit4life1}
        />
        <HeroBottom
          text={
            <Fragment>
              <p className="quote">
                Bedankt Lore voor de heel goede begeleiding en de fantastische
                gerechtjes. Ik kan jou aan iedereen warm aanbevelen. You are
                amazing!
              </p>
              <br />
              <br />
              <p>Didier Valcke, Wachtebeke, 20 kg afgevallen</p>
            </Fragment>
          }
          button="lees alle testimonials"
          link="/testimonials"
          img=""
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          id="home2"
          class="fit4life fit4life2"
          title="dit traject is iets voor jou als:"
          text={
            <Fragment>
              <ul>
                <li>
                  jouw liefde door de maag gaat en je een{" "}
                  <strong>360° transformatie</strong>
                  wenst
                </li>
                <li>
                  de finesse van{" "}
                  <strong>gezond, lekker en gevarieerd koken</strong> onder de
                  knie wil krijgen
                </li>
                <li>
                  je graag leert spelen met lekkere ingrediënten, kruiden,
                  nieuwe smaken en nadien verder op je eigen{" "}
                  <strong>culinaire ontdekkingsreis</strong> wil gaan
                </li>
                <li>
                  <strong>10 - 20 kg zou willen afvallen</strong> en/of wil
                  focussen op{" "}
                  <strong>
                    het verbeteren van je gezondheid, energielevel en vitaliteit
                  </strong>
                </li>
              </ul>
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={fit4life2}
        />
        <HeroBottom
          // id="hero-middle"
          id="home-hero-bottom"
          class="fit4life fit4life3 min-vh-100"
          title="fit4life omvat:"
          button="start vandaag voor €151/maand"
          link="/contact"
          img=""
          text={
            <Fragment>
              <ul>
                <li>
                  intake gesprek, gekoppeld aan een{" "}
                  <strong>persoonlijk dossier</strong>
                </li>
                <li>
                  <strong>12 op maat gemaakte voedingsplannen</strong>
                </li>
                <li>
                  <strong>16 opvolg consultaties</strong>, incl.
                  lichaamssamenstelling (12 + 4 gratis)
                </li>
                <li>
                  recept optimalisatie naar{" "}
                  <strong>individuele voorkeur</strong>
                </li>
                <li>
                  <strong>aanpassing voedingsplan</strong> bij
                  voedselallergieën, intoleranties, plantaardige levensstijl en
                  sport(prestaties)
                </li>
                <li>
                  14 maand <strong>allround 1-op-1 support</strong> via WhatsApp
                  en e-mail (12 + 2 gratis)
                </li>
                <li>
                  heerlijke, gezonde en gemakkelijke{" "}
                  <strong>seizoensgebonden recepten</strong>: ontbijt, lunch en
                  avondmaaltijd. Variatie / 2 weken
                </li>
                <li>
                  bijhorende <strong>boodschappenlijst</strong>, volgens de
                  standaard winkelindeling
                </li>
                <li>
                  op maat gemaakte <strong>tips & tricks</strong>: restogids,
                  reistips, food swaps,...
                </li>
                <li>
                  <strong>betaling in 12 termijnen</strong> mogelijk aan
                  €151/maand of betaal vooruit en bespaar €119
                </li>
                <li>
                  <strong>gedeeltelijke terugbetaling</strong> van jouw
                  mutualiteit
                </li>
                <li>
                  <strong>aftrekbare beroepskost</strong> als zelfstandige in
                  hoofd -en bijberoep
                </li>
                <li>
                  <strong>bonus:</strong> receptenbundel met 30 nieuwe cheatday
                  recepten
                </li>
                <li>
                  <strong>bonus:</strong> receptenbundel met 30 nieuwe lifestyle
                  recepten
                </li>
              </ul>
            </Fragment>
          }
        />
        {/* <HeroBottom
          id="home-hero-bottom"
          title="weet je niet wat de beste keuze voor jou is?"
          text="Boek een gratis gezondheidsgesprek in om jouw programma af te stellen op jouw doelstellingen."
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={banner}
        /> */}
      </div>
    </>
  );
}
