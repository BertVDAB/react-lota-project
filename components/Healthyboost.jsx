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
import "./healthyboost.css";

import hero from "../img/aanbod/hero.jpg";
import heroBottom from "../img/betekenen.jpg";

import banner from "../img/banners/banner.png";

import healthyboost1 from "../img/aanbod/4.jpg";
import home2 from "../img/aanpak.jpg";
import home3 from "../img/recepten.jpg";
import home4 from "../img/partner.jpg";

import healthyboost3 from "../img/aanbod/healthyboost/2.jpg";

import Video from "./Video";
import video from "../video/main.mp4";

export default function Healthyboost() {
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
  const klasse = "fit&flex";
  return (
    <>
      <Hero
        id="aanbod-hero"
        class={klasse}
        title={
          <Fragment>
            a new healthy way
            <br></br>to enjoy life's menu
            <br></br> lota, à la carte.
          </Fragment>
        }
        img={hero}
      />

      <div id="healthyboost-container">
        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="home1"
          class={klasse}
          title="healthy boost."
          price={
            <Fragment>
              €949/programma
              <br />6 betalingen aan €169/maand
            </Fragment>
          }
          text={
            <Fragment>
              Ben je op zoek naar een manier om jouw gezonde(re) levensstijl te
              verfijnen, waarbij je niet alleen wil afvallen maar ook je
              energielevel wil verbeteren? Ontdek healthy boost,{" "}
              <strong>
                mijn best verkochte programma, waarbij ik jou uit de
                startblokken help{" "}
              </strong>
              richting jouw nieuwe gezonde levensstijl dankzij{" "}
              <strong>à la carte begeleiding</strong>, waarbij je kennismaakt
              met de lota way of life.
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={healthyboost1}
        />

        <HeroBottom
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          class={klasse}
          text={
            <Fragment>
              <p className="quote">
                Medicatie kon mijn ontregelde schildklier niet verhelpen. Ik
                zocht en vond Lore en dankzij haar expertise heb ik 6 maand
                later geen gewichtsschommelingen meer, verteert mijn eten terug
                en voel ik me oprecht top in mijn vel! Dankjewel!
              </p>
              <br />
              <br />
              <p>Louise Slabbinck, Oostkamp, 8,5 kg afgevallen</p>
            </Fragment>
          }
          button="lees alle testimonials"
          link="/testimonials"
          img=""
        />

        <Section
          id="home2"
          class={klasse}
          title={
            <Fragment>
              dit traject is iets voor
              <br></br>jou als je:
            </Fragment>
          }
          text={
            <Fragment>
              <ul>
                <li>
                  <strong>een eigen gezonde way-of-life</strong> wil creëren:
                  krijg inzicht in wat je lichaam nodig heeft om optimaal te
                  functioneren.
                </li>
                <li>
                  <strong>maximaal 8 kg zou willen afvallen</strong> en/of wil
                  focussen op het{" "}
                  <strong>
                    verbeteren van je gezondheid, energielevel en vitaliteit
                  </strong>
                </li>
                <li>
                  gelooft dat een gezonde levensstijl{" "}
                  <strong>geen eenheidsworst</strong> is: leer kennismaken met
                  een andere manier van gezond eten waarmee je jouw doelstelling
                  echt behaalt en behoudt
                </li>
                <li>
                  zoekt naar een <strong>compleet pakket</strong> van
                  begeleiding, recepten, tools en ondersteuning van een
                  professional om{" "}
                  <strong>
                    jouw gezonde levensstijl te bereiken en te behouden.
                  </strong>
                </li>
              </ul>
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={healthyboost3}
        />
        <HeroBottom
          refProp={(el) => (bgDarkDivsRef.current[2] = el)}
          id="healthyboost-omvat"
          class={klasse}
          title="healthy boost omvat"
          button="start vandaag voor €169/maand"
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
                  <strong>6 op maat gemaakte voedingsplannen</strong>
                </li>
                <li>
                  <strong>8 opvolg consultaties</strong>, incl.
                  lichaamssamenstelling (6+2 gratis)
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
                  8 maand <strong>allround 1-op-1 support</strong> via WhatsApp
                  en e-mail (6 + 2 gratis)
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
                  <strong>
                    flexibel overstappen naar het voordeligere fit4life
                  </strong>
                  , incl. terugbetaling prijsverschil
                </li>
                <li>
                  <strong>betaling in 6 termijnen </strong>mogelijk aan
                  €169/maand of betaal vooruit en bespaar €66
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
                  <strong>bonus</strong>: receptenbundel met 30 nieuwe cheatday
                  recepten
                </li>
                <li>
                  <strong>bonus</strong>: receptenbundel met 30 nieuwe lifestyle
                  recepten
                </li>
              </ul>
            </Fragment>
          }
        />
        {/* <HeroBottom
          id="home-hero-bottom"
          class={klasse}
          title="weet je niet wat de beste keuze voor jou is?"
          text="Boek een gratis gezondheidsgesprek in om jouw programma af te stellen op jouw doelstellingen."
          button="start vandaag voor €195/maand"
          link="/contact"
          img={banner}
        /> */}
      </div>
    </>
  );
}
