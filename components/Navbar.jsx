import React from 'react'
import { useState, useContext } from 'react'
import { motion, animate, color } from 'framer-motion'
import { Link } from "react-router-dom";
// import { AppContext } from '../App'


import './Navbar.css'
import Hamburgermenu from './Hamburgermenu'


import logo from "../img/logo.png"
import menuImg from "../img/menu/1.png";

import { Context } from '../App'


export default function Navbar() {
  // const {menuColor} = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useContext(Context);

  const ToggleClass = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      const classlistOpen = "mobile-white-bg";
      console.log("open");
    } else {
      console.log("closed");
    }
  };

  return (
    <>
      {/* <div
        className="test-console"
        style={{
          backgroundColor: "pink",
          left: "320px",
          position: "fixed",
          fontSize: "2rem",
          zIndex: "1000",
        }}
      >
        {isAnyBgDarkDivAtTop ? "Nav: true" : "Nav: false"}
      </div> */}
      <header>
        <div id="navbar" className={isOpen ? "mobile-white-bg" : null}>
          <a href="/">
            <div id="logo">
              <img
                src={logo}
                alt=""
                className={
                  isAnyBgDarkDivAtTop && !isOpen ? "invert-logo" : null
                }
              />
            </div>
          </a>
          {/* HIER FLEXBOX OM ICOONTJE NAAST HAMBURGERMENU TE KRIJGEN */}
          <div id="menu">
            <div className="gesprek-desktop">
              <Link to={"/contact"}>
                <button
                  className={
                    isAnyBgDarkDivAtTop && !isOpen ? "contact-button-inverted" : "contact-button"
                  }
                >
                  Gratis gezondheidsgesprek
                </button>
              </Link>
            </div>

            <div className="gesprek-mobile">
              <Link to={"/contact"}>
                <i
                  style={{ color: "black" }}
                  className="fa-solid fa-calendar-days fa-2xl"
                ></i>
              </Link>
            </div>

            <div
              id="hamburgermenu"
              className={
                isAnyBgDarkDivAtTop && !isOpen ? "invert-hamburger" : null
              }
            >
              <label htmlFor="check">
                <input
                  onClick={ToggleClass}
                  type="checkbox"
                  id="check"
                  checked={isOpen}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>
        </div>

        {/* MENU OVERLAY */}

        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <div className="flex-1">{/* <img src={menuImg} alt="" /> */}</div>
          <div onClick={ToggleClass} className="flex-2">
            <div className="nav-menu-1">
              <ul>
                <Link to="/ontmoet/#" style={{ color: "white" }}>
                  <li>ontmoet lore.</li>
                </Link>
                <Link to="/aanbod/#" style={{ color: "white" }}>
                  <li>aanbod.</li>
                </Link>
                <Link to="/contact/#" style={{ color: "white" }}>
                  <li>contact.</li>
                </Link>
              </ul>
            </div>
            <div className="nav-menu-2" style={{ fontSize: "2rem" }}>
              <ul>
                <Link to="/testimonails" style={{ color: "white" }}>
                  <li>testimonals.</li>
                </Link>
                <Link to="/specialisaties/#" style={{ color: "white" }}>
                  <li>specialisaties.</li>
                </Link>
                <Link to="/faq/#" style={{ color: "white" }}>
                  <li>faq.</li>
                </Link>
              </ul>
            </div>
            <div className="nav-menu-2">
              <ul>
                <Link to="/eet/#" style={{ color: "white" }}>
                  <li>eet.</li>
                </Link>
                <Link to="/beweeg/#" style={{ color: "white" }}>
                  <li>beweeg.</li>
                </Link>
                <Link to="/leef/#" style={{ color: "white" }}>
                  <li>leef.</li>
                </Link>
              </ul>
            </div>
            <div className="nav-menu-3">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/lota.lifestyle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "grey" }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lota.lifestyle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "grey" }}
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* <ul className="nav-menu-list">
              <li className="nav-menu-item">
                <Link to="/ontmoet" style={{ color: "white" }}>
                  ontmoet lore.
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/aanbod" style={{ color: "white" }}>
                  aanbod.
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/contact" style={{ color: "white" }}>
                  contact.
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/specialisaties" style={{ color: "white" }}>
                  specialisaties.
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/faq" style={{ color: "white" }}>
                  faq.
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </header>
    </>
  );
}
