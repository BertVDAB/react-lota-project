import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import '../CarouselCustomStyles.css'

import qright from '../img/testimonials/qRight.png'

// import thumbnails


function CarouselBox() {

    const carouselData = [
      {
        name: "Astrid Stockman",
        undertitle: "sportvoeding, healthy boost ",
        title:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas!",
        text: "Lore stond me als voedingsexperte bij toen ik trainde voor de 1000km voor Kom Op Tegen Kanker. Ik voelde op de fiets dat de balans van mijn voeding niet correct zat. Zij gaf me overzichtelijke en realistische voedingsschema’s, waarvan elk gerecht opnieuw een verrassing was. Ook tijdens de dagen van de sportprestatie had ze voor mij een plan opgesteld van wat ik zowel naast als op de fiets moest eten. Dankzij Lore heb ik deze uitdaging op de best mogelijke manier doorstaan, en daarnaast is ze dan ook nog eens een heel fijn mens. Erg bedankt!",
        img: "https://www.bertverbanck.be/lore2024/img/ASTRID.jpg",
      },
      {
        name: "Elize Daene",
        undertitle: "postpartum begeleiding, healthy boost",
        title: "een boost in mijn parate kennis van gezonde voeding",
        text: "Na mijn bevalling kwam een voedingsplan van Lota.Lifestyle als geroepen! Ik moet nog mijn laatste kilootjes kwijt en dit met toch nog heel lekkere gerechtjes is voor mij win win. Ik eet heel graag en eet ook graag kruidig eten. Alle gerechten hebben super veel smaak & zijn ook niet al te moeilijk om klaar te maken, aangezien ik maar een beginneling ben in de keuken, lukt het me redelijk goed! Ik speel zelfs al een beetje zelf met overschotten van groenten voor de lunch nadien of een gerechtje iets anders te maken met andere groenten. Ook het boodschappenlijstje is voor mij een musthave, heel handig om in de winkel al je ingrediënten bij elkaar te halen!",
        img: "https://www.bertverbanck.be/lore2024/img/ELIZE.jpg",
      },
      {
        name: "Didier Valcke",
        undertitle: "fit4life",
        title: "een boost in mijn parate kennis van gezonde voeding",
        text: "Vorig jaar besloten om dan toch de stap te zetten om bij diëtist te gaan om iets te doen aan mijn gewicht en gezonder te leven/eten. Wordt fantastisch goed begeleid door Lore die ervoor zorgt dat ik een gezonde levensstijl krijg, gewicht verlies maar ook kan volhouden. Ze zorgt er elke maand voor dat ik nieuwe menu's krijg voor 's morgens, 's middags en 's avonds die makkelijk te maken zijn en overheerlijk zijn om te eten. Zondag is de gebruikelijke dag waar je mag eten wat je wilt. Ondertussen zijn we al 20 kilo kwijt en voelen we ons pakken beter. Bedankt Lore voor de heel goede begeleiding en de fantastische gerechtjes. Ik kan jou aan iedereen warm aanbevelen. You are amazing!",
        img: "https://www.bertverbanck.be/lore2024/img/DIDIER.jpg",
      },
    ];
    
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {carouselData.map((item, index) => (
          <div key={index}>
            <div className="car-flexbox">
              <div className="car-flex1">
                <img src={item.img} alt="" />
              </div>
              <div className="car-flex2">
                {/* <img
                  id="q1"
                  style={{
                    width: "60px",
                    height: "60px",
                    transform: "rotate(180deg)",
                  }}
                  src={qright}
                  alt=""
                /> */}

                <div className="car-flex2--content">
                  <p className="car-text">{item.text}</p>

                  <div className="thumbnail">
                    <img
                      className="thumbnail-img"
                      src={item.img}
                      alt=""
                      style={{
                        height: "200px",
                        width: "200px",
                      }}
                    />
                  </div>
                  <p className="car-name">{item.name}</p>
                  {item.undertitle ? (
                    <p className="car-text">{item.undertitle}</p>
                  ) : null}
                </div>

                {/* <img
                  id="q2"
                  style={{ width: "60px", height: "60px" }}
                  src={qright}
                  alt=""
                /> */}
              </div>
            </div>
          </div>
          
        ))}
      </Carousel>
    </>
  );
}

export default CarouselBox