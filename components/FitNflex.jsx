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
import "./fitNflex.css";

import hero from "../img/aanbod/hero.jpg";
import heroBottom from "../img/betekenen.jpg";

import banner from "../img/aanbod/fitNflex/hero.jpg";

import fitNflex1 from "../img/aanbod/fitNflex/1.jpg";
import home2 from "../img/aanpak.jpg";
import home3 from "../img/recepten.jpg";
import home4 from "../img/partner.jpg";

import Video from "./Video";
import video from "../video/main.mp4";

export default function FitNflex() {
  const klasse = "fit&flex";

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
        class={klasse}
        title={
          <Fragment>
            amuse bouche
            <br></br>a bite-size portion
            <br></br> of the lota way of life™️.
          </Fragment>
        }
        img={hero}
      />

      <div id="fitNflex-container">
        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="home1"
          class={klasse}
          title="fit&flex."
          price="€195/maand"
          text={
            <Fragment>
              Wil je gezond afvallen eens op een andere manier ervaren of heb je
              <strong> een intensieve detox</strong> nodig? Ontdek Fit & Flex,
              <strong>
                het ideale voorproevertje van de lota way of life™️.
              </strong>{" "}
              Ook voor diegenen die al een programma volgden, is Fit & Flex de
              ideale manier om de smaak terug te pakken te krijgen. Betaal
              maandelijks en bepaal elke maand hoe lang je begeleid wilt worden.
              Zo heb je{" "}
              <strong>
                de vrijheid om op elk moment te stoppen, pauzeren of verlengen
                aan een voordeliger tarief.
              </strong>
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={fitNflex1}
        />

        <HeroBottom
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          class={klasse}
          text={
            <Fragment>
              <p className="quote">
                Het laagdrempelige programma was voor mij een ideale instap. Ik
                hou van vrijheid en daarom was het ook geruststellend om te
                horen dat ik zelf kan bepalen wanneer ik de begeleiding wil
                volgen, zonder vast te hangen aan een abonnement.
              </p>
              <br />
              <br />
              <p>Sandra Vermeulen, De Haan, 4 kg afgevallen in 1 maand</p>
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
                  zoekt naar een <strong>waardevol kickstartpakket</strong> van
                  begeleiding, recepten, tools en ondersteuning van een
                  professional: ideaal als je graag snel 1 à 2 kg wil verliezen
                  naar aanloop van je vakantie, een trouw of communie, een
                  verjaardagsfeest
                </li>
                <li>
                  een goede <strong>detox</strong> na de feestdagen wil
                </li>
                <li>
                  graag van twee walletjes eet:{" "}
                  <strong>zowel gezond & lekker</strong>
                </li>
                <li>
                  nog wat{" "}
                  <strong>
                    twijfelt om te investeren in een langdurig programma
                  </strong>
                  en je wil ontdekken of de Lota way of life ook jouw way of
                  life kan zijn
                </li>
                <li>
                  als je al kaas gegeten hebt van de Lota way of life™️ en/of er
                  zelf al een gezonde levensstijl op nahoudt en je{" "}
                  <strong>
                    recepten repertoire wil uitbreiden met nieuwe seizoens
                    favorieten
                  </strong>
                </li>
              </ul>
            </Fragment>
          }
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={home2}
        />
        <HeroBottom
          refProp={(el) => (bgDarkDivsRef.current[2] = el)}
          // id="hero-middle"
          id="fitNflex-omvat"
          class={klasse}
          title="fit&flex omvat:"
          button="start vandaag voor €195/maand"
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
                  <strong>1 op maat gemaakte voedingsplan/maand</strong>
                </li>
                <li>
                  <strong>1 opvolg consultatie/maand</strong>, incl.
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
                  <strong>allround 1-op-1 support</strong> via WhatsApp en
                  e-mail / maand
                </li>
                <li>
                  heerlijke, gezonde en gemakkelijke{" "}
                  <strong>seizoensgebonden recepten:</strong>
                  ontbijt, lunch en avondmaaltijd. Variatie / 2 weken
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
                    flexibel overstappen naar een uitgebreider programma
                  </strong>
                  , incl. terugbetaling prijsverschil
                </li>
                <li>
                  <strong>gedeeltelijke terugbetaling</strong> van jouw
                  mutualiteit
                </li>
                <li>
                  <strong>aftrekbare beroepskost</strong> als zelfstandige in
                  hoofd -en bijberoep
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
          button="boek jouw gratis gezondheidsgesprek"
          link="/contact"
          img={banner}
        /> */}
      </div>
    </>
  );
}
