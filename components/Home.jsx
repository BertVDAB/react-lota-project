import { React, Fragment, useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import Navbar from "./Navbar";

import Section from "./Section";
import Hero from "./Hero";

import "./home.css";
import HeroBottom from "./HeroBottom";

import hero from "../img/ontmoet/hero.jpg";
import heroBottom from "../img/betekenen.jpg";

import banner from "../img/main/banner.jpg";

import home1 from "../img/main/1.jpg";
import home2 from "../img/main/2.jpg";
import home3 from "../img/main/3.jpg";
import home4 from "../img/main/4.jpg";

import Video from "./Video";
import video from "../video/main.mp4";

import { Context } from "../App"

export default function Home() {
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useContext(Context);
  // const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useState(false);
  const bgDarkDivsRef = useRef([]);
  

  useEffect(() => {
    const handleScroll = () => {
      // Check if any div with class "bg-dark" is at the top of the viewport
      const isAnyDivAtTop = bgDarkDivsRef.current.some((div) => {
        const rect = div.getBoundingClientRect();
        return rect.top <= 45
         && rect.bottom > 0;
      });

      setIsAnyBgDarkDivAtTop(isAnyDivAtTop);

    };

    // Attach the function to the scroll event for continuous monitoring
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgDarkDivsRef]);

  return (
    <>
      {/* <div
        className="test-console"
        style={{
          backgroundColor: "green",
          position: "fixed",
          left: "150px",
          fontSize: "2rem",
          zIndex: "1000",
        }}
      >
        {isAnyBgDarkDivAtTop ? "Home: true" : "Home: false"}
      </div> */}

      <Video title="welkom." video={video} />
      <div id="home-container">
        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="home1"
          title="persoonlijke voedingsbegeleiding voor een levenslang resultaat."
          text={
            <Fragment>
              Met mijn jarenlange ervaring als diëtiste, begrijp ik hoe
              belangrijk het is om de juiste voedingskeuzes te maken. Maar ik
              weet ook dat gezond eten niet saai of ingewikkeld hoeft te zijn.
              Daarom heb ik een aanpak ontwikkeld die persoonlijk is en bij jou
              past. Samen kunnen we werken aan een gezonde levensstijl die je
              voor altijd kunt volhouden.
            </Fragment>
          }
          button="lees meer"
          link="/eet"
          img={home1}
        />

        <Section
          id="home2"
          title="mijn aanpak."
          text="Met mijn jarenlange ervaring als diëtiste, begrijp ik hoe belangrijk het is om de juiste voedingskeuzes te maken. Maar ik weet ook dat gezond eten niet saai of ingewikkeld hoeft te zijn. Daarom heb ik een aanpak ontwikkeld die persoonlijk is en bij jou past. Samen kunnen we werken aan een gezonde levensstijl die je voor altijd kunt volhouden."
          button="lees meer"
          link="/eet"
          img={home2}
        />

        <HeroBottom
          // id="hero-middle"
          id="home-hero-bottom"
          title="op maat gemaakte voedingsplannen voor jouw doelen."
          button="lees meer"
          link="/eet"
          img={banner}
          text={
            <Fragment>
              Samen stellen we{" "}
              <strong>
                een voedingsplan op dat past bij jouw levensstijl en doelen.
              </strong>{" "}
              Of je nu wilt afvallen, meer energie wilt hebben, of gewoon
              gezonder wilt leven, ik kan je helpen om je doelen te bereiken.
              Met mijn expertise en ervaring weet ik{" "}
              <strong>
                welke voedingsmiddelen en maaltijden het beste zijn om jouw
                resultaten te behalen en te behouden.
              </strong>{" "}
              Ik houd{" "}
              <strong>
                rekening met jouw smaak, voorkeuren en levensstijl,
              </strong>{" "}
              zodat het plan goed bij je past.
            </Fragment>
          }
        />
        <Section
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          id="home3"
          title="eenvoudige, heerlijke recepten om van te genieten."
          text="Elke maand deel ik met jou eenvoudige, heerlijke recepten met een boodschappenlijst die je kan gebruiken om gezond te koken en te genieten van je maaltijden. Deze recepten zijn niet alleen gezond, maar ook lekker en gemakkelijk te bereiden. Zo kun je gezond eten zonder dat het voelt als een opoffering."
          button="lees meer"
          link="/eet"
          img={home3}
        />

        <Section
          id="home4"
          title="partner in food & motion."
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
              </strong>{" "}
              Mijn doel is om jou te helpen bij het bereiken van een gezonde
              levensstijl die je voor altijd kunt volhouden.
            </Fragment>
          }
          button="lees meer"
          link="/ontmoet"
          img={home4}
        />
      </div>
    </>
  );
}
