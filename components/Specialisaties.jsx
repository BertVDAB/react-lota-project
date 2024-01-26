import {
  React,
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import { Context } from "../App";
import "./Specialisaties.css";

import Hero from "./Hero";
import hero from "../img/main/banner.jpg";

import HeroBottom from "./HeroBottom";
// import banner from "../img/banners/banner.png";
import banner from "../img/specialisaties/banner.jpg";

function Timeline() {
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
        id="timeline"
        title={
          <Fragment>
            mijn <br />
            specialisaties.
          </Fragment>
        }
        img={hero}
      />

      <div className="timeline" ref={(el) => (bgDarkDivsRef.current[0] = el)}>
        <div className="container right">
          <div className="content">
            <h2>2016</h2>
            <p>
              De fundamenten van mijn visie worden gelegd in Das Kurhaus te
              Oostenrijk.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2017</h2>
            <p>
              Ontwikkelen van de Verse Vis Gids: een gids om de korte keten
              binnen de Belgische visserij te steunen.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2017</h2>
            <p>
              Afgestudeerd in de richting Voeding-en dieetkunde in Gent. Diploma
              behaald met onderscheiding.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2018</h2>
            <p>
              Specialisatiejaar in voedingsallergieën -en intoleranties en
              sportvoeding.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2019</h2>
            <p>
              Overtuigd van de combinatie van de 2 luiken voeding en sport,
              ontstaat de samenwerking met Healthpoint Brugge.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>2020</h2>
            <p>
              Lore ontwikkelt een unieke manier van werken op vlak van afvallen
              en begeleidt 58 klanten succesvol tot een gezondere levensstijl.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2020</h2>
            <p>
              Lore breidt haar kennis over voedings-suppletie uit a.d.h.v.
              masterclasses en start de tweejarige BIOK opleiding tot
              orthomoleculaire voedingscoach waarbij ze de impact van
              omgevingsfactoren op het lichaam leert analyseren en omzetten in
              een nutritioneel plan.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>2021</h2>
            <p>
              Steeds meer klanten hebben vraag naar haar expertise. Het jaar
              wordt afgesloten met 139 tevreden klanten.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2022</h2>
            <p>
              De persoonlijke aanpak en de passie van Lore om mensen te helpen,
              ontpopt tot een nieuw verhaal: Lota Lifestyle.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>2023</h2>
            <p>
              Lota groeit, haar praktijk in Brugge is booming. Ook ver buiten
              Brugge vinden mensen hun weg naar lota, waardoor de vraag naar
              online consultaties stijgt
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>EEN SAMENWERKING MET JOU?</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
