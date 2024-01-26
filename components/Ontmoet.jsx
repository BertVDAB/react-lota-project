import {React, Fragment, useContext, useEffect, useRef} from "react";

import "./Ontmoet.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";

import hero from "../img/ontmoet/hero.jpg";
import heroBottom from "../img/patterns/1.jpg";
import ontmoet1 from "../img/ontmoet/1.png";
import ontmoet2 from "../img/ontmoet/2.jpg";
import ontmoet3 from "../img/ontmoet/3.jpg";

import { Context } from "../App";


export default function Ontmoet() {
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useContext(Context);
  // const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useState(false);
  const bgDarkDivsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if any div with class "bg-dark" is at the top of the viewport
      const isAnyDivAtTop = bgDarkDivsRef.current.some((div) => {
        const rect = div.getBoundingClientRect();
        return rect.top <= 45 && rect.bottom > 0;
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
      <div id="ontmoet-container">
        <Hero
          id="ontmoet-hero"
          title="ontmoet
lore."
          img={hero}
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[0] = el)}
          id="ontmoet1"
          title="wilskracht."
          text={
            <Fragment>
              Het goede nieuws is: dankzij gezonde voeding krijg je automatisch
              meer zelfvertrouwen en energie. Wat je nodig hebt is een goede
              dosis wilskracht en ondersteuning. Zelf heb ik ook een hobbelig
              parcours en moeilijke relatie met voeding achter de rug. Op mijn
              achttiende werd ik slachtoffer van seksueel misbruik. En was ik
              <strong>
                {" "}
                het vertrouwen in mijn lichaam volledig kwijt.{" "}
              </strong>{" "}
              Ik verstopte het onder lagen kleding, en mijn relatie met voeding
              vertaalde zich in extremen: sommige dagen at ik te weinig, andere
              dagen propte ik mezelf vol met ongezond eten. Ik besloot om
              opnieuw controle te nemen over mijn eigen lichaam en gezondheid.
              Ik beloofde aan mezelf dat ik{" "}
              <strong>mijn grootste angst zou overwinnen</strong> en dat ik er
              mijn sterkte van zou maken. Dankzij koken en gezond eten won ik
              stap voor stap opnieuw het vertrouwen in mezelf, én in mijn
              lichaam. In mijn 2e jaar vertaler-tolk ruilde ik mijn studies om
              voor voeding en dieetkunde met <strong>een bewust doel:</strong>{" "}
              anderen helpen zodat ze ook het vertrouwen in zichzelf en hun
              lichaam zouden ontdekken.
            </Fragment>
          }
          img={ontmoet1}
        />

        <Section
          id="ontmoet2"
          title="op maat."
          text={
            <Fragment>
              Ik merkte dat{" "}
              <strong>
                de klassieke dieetleer mij op mijn honger liet zitten.
              </strong>{" "}
              Ik vond het belangrijk om een nieuwe visie op gezond eten te
              delen, waarbij er aandacht besteed wordt aan het wetenschappelijke
              luik, maar ook aan de <strong>schoonheid van een gerecht</strong>{" "}
              op vlak van smaak en kleur. Eten doe je namelijk met al je
              zintuigen. Met mijn gerechten wil ik mensen met elkaar{" "}
              <strong>verbinden</strong>, daarom vind ik het belangrijk dat mijn
              gerechten <strong>toegankelijk</strong> zijn voor je hele gezin.
              Tenslotte heeft elke mens een andere rugzak en een verhaal. Daarom
              ben ik ervan overtuigd dat een persoonlijke kijk en{" "}
              <strong>360° aanpak</strong>
              het beste werkt om duurzame resultaten te bereiken.
            </Fragment>
          }
          img={ontmoet2}
        />

        <Section
          refProp={(el) => (bgDarkDivsRef.current[1] = el)}
          id="ontmoet3"
          title="gezond genieten."
          text={
            <Fragment>
              Ik geloof in de kracht van{" "}
              <strong>gezonde, volle, pure voeding</strong> waarmee je lekkere
              en toegankelijke gerechten maakt, en{" "}
              <strong>op maat gemaakte voedingsplannen.</strong> Elke maand maak
              ik voor mijn klanten en mezelf een voedingsplan op met een
              bijhorende <strong>boodschappenlijst</strong> en handige{" "}
              <strong>tips & tricks</strong> om je wekelijkse sociale uitjes
              gezond te houden. Door op voorhand een plan te voorzien, kan je je
              gezonde gewoontes volhouden. Als levensgenieter en bourgondiër
              vind ik het belangrijk om wekelijks een <strong>cheatday</strong>{" "}
              in te lassen. Die dag eet je alles waar je zin in hebt: vers
              afgebakken boterkoeken, pannenkoeken, frietjes, chocolade,... noem
              maar op. Bij Lota geloven we in een gezonde levensstijl die je op{" "}
              <strong>lange termijn</strong> kan volhouden.
            </Fragment>
          }
          img={ontmoet3}
        />
      </div>
    </>
  );
}
