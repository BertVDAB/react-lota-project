import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";

import Hero from "./Hero";
import Section from "./Section";

import hero from "../img/aanbod/hero.jpg";

import img1 from "../img/aanbod/1.jpg";
import img2 from "../img/aanbod/2.jpg";
import img4 from "../img/aanbod/3.jpg";
import img3 from "../img/aanbod/4.jpg";

import HeroBottom from "./HeroBottom";
import banner from "../img/patterns/1.jpg";

import "./Aanbod.css";

export default function Aanbod() {
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
      <div id="aanbod-container">
        <Hero
          id="aanbod-hero"
          title={
            <Fragment>
              ontdek<br></br>mijn unieke<br></br> manier van werken.
            </Fragment>
          }
          img={hero}
        />
        <div
          ref={(el) => (bgDarkDivsRef.current[0] = el)}
          className="aanbod-top-wrapping"
        >
          <Section
            id={"aanbod1"}
            title={
              <Fragment>
                360° programma's<br></br>
                met ruimte<br></br>
                voor 'jou'.
              </Fragment>
            }
            text={
              <Fragment>
                Elk programma gaat uit van een holistische visie gebaseerd op
                mijn expertise, met oog op integratie in elke levensstijl,
                waarbij er belang gehecht wordt aan de sociale aspecten van het
                leven en{" "}
                <strong>
                  jouw manier van genieten steeds op de eerste plaats komt.
                </strong>{" "}
                Elke maand bereid je samen met mij{" "}
                <strong>
                  mijn lekkerste gerechten, geoptimaliseerd in een plan
                  aangepast aan jouw gezondheidsdoelen.
                </strong>{" "}
                Tijdens jouw begeleiding leer je de noden van jouw lichaam
                kennen en erop inspelen.
                <strong>
                  {" "}
                  Zo wordt the lota way of life™️, your way of life.
                </strong>{" "}
                Eenmaal je beslist om te investeren in jouw nieuwe levensstijl,
                gaan we onmiddellijk aan de slag.{" "}
                <strong>
                  Opvolgingen kunnen online en/of in de praktijk plaatsvinden.
                </strong>{" "}
                Jij focust je enkel op jouw doel, ik leg de puzzelstukjes
                onderweg.
              </Fragment>
            }
            button="boek meteen een gratis gezondheidsgesprek"
            img={img1}
            link="/contact"
          />

          <Section
            id="aanbod2"
            title="fit4life."
            subtitle1="€1695/programma"
            subtitle2="12 betalingen aan €151/maand"
            text={
              <Fragment>
                <span style={{ fontStyle: "italic" }}>
                  “Het meest complete en waardevolle traject om jouw gezondheid
                  en welzijn te verbeteren op fysiek en mentaal vlak.”
                </span>
                <br />
                <br /> Wil je je levensstijl een complete ommezwaai geven en
                zoek je daarbij begeleiding op maat? Dan is fit4life jouw ideale
                metgezel om de lota way of life™️,{" "}
                <strong>your way of life</strong> te maken en
                <strong>
                  {" "}
                  nadien het heft in eigen handen te nemen om zelf de
                  ingrediënten voor een lang gezond leven samen te stellen.
                </strong>{" "}
              </Fragment>
            }
            button="Lees meer"
            link="/fit4life"
            img={img4}
          />

          <Section
            id="aanbod3"
            title="healthy boost."
            subtitle1="€949/programma"
            subtitle2="6 betalingen aan €169/maand"
            text={
              <Fragment>
                <span style={{ fontStyle: "italic" }}>
                  “Ontdek mijn meest gekochte traject en geniet van een
                  gezondere levensstijl in slechts 6 maanden.”
                </span>
                <br />
                <br />
                Ben je op zoek naar een manier om jouw gezonde(re) levensstijl
                te verfijnen, waarbij je niet alleen wil afvallen maar ook je
                energielevel wil verbeteren? Ontdek healthy boost,{" "}
                <strong>
                  mijn best verkochte programma, waarbij ik jou uit de
                  startblokken help
                </strong>{" "}
                richting jouw nieuwe gezonde levensstijl dankzij{" "}
                <strong>
                  à la carte begeleiding, waarbij je kennismaakt met de lota way
                  of life™️.
                </strong>
              </Fragment>
            }
            button="lees meer"
            img={img3}
            link="/healthyboost"
          />
          <Section
            id="aanbod4"
            title="fit&flex."
            subtitle1="€195/maand"
            subtitle2="de voorproever van de lota way of life™️"
            text={
              <Fragment>
                <span style={{ fontStyle: "italic" }}>
                  “de voorproever van de lota way of life™️”
                </span>
                <br />
                <br />
                Wil je gezond afvallen eens op een andere manier ervaren of heb
                je <strong>een intensieve detox</strong> nodig? Ontdek Fit &
                Flex,
                <strong>
                  het ideale voorproevertje van de lota way of life™️.
                </strong>{" "}
                Ook voor diegenen die al een programma volgden, is Fit & Flex de
                ideale manier om de smaak terug te pakken te krijgen. Betaal
                maandelijks en bepaal elke maand hoe lang je begeleid wilt
                worden. Zo heb je{" "}
                <strong>
                  de vrijheid om op elk moment te stoppen, pauzeren of verlengen
                  aan een voordeliger tarief.
                </strong>
              </Fragment>
            }
            button="lees meer"
            img={img2}
            link="/fit&flex"
          />
        </div>
      </div>
    </>
  );
}
