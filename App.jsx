import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MailchimpFormContainer from "./components/MailChimpContainer";
import Specialisaties from "./components/Specialisaties";

import Testimonial_ind from "./components/Testimonial_ind";

// import Nav from "./components/Nav";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Eet from "./components/Eet";
import Ontmoet from "./components/Ontmoet";
import Leef from "./components/Leef";
import Contact from "./components/Contact";
import VeelgesteldeVragen from "./components/VeelgesteldeVragen";
import Beweeg from "./components/Beweeg";
import Fit4life from "./components/Fit4life";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Aanbod from "./components/Aanbod";
import Testimonails from "./components/Testimonails";
import FitNflex from "./components/FitNflex";
import Healthyboost from "./components/Healthyboost";
import Testimonials_geschreven from "./components/Testimonials_geschreven";

export const Context = React.createContext();

function App() {
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useState(false);

  return (
    <>
      <Context.Provider value={[isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop]}>
        {/* <div
          className="test-console"
          style={{
            backgroundColor: "red",
            position: "fixed",
            fontSize: "2rem",
            zIndex: "1000",
          }}
        >
          {isAnyBgDarkDivAtTop ? "App: true" : "App: false"}
        </div> */}
        {/* <Nav/> */}
        {/* <span className="cta-overlay"></span> */}
        <Navbar />
        <div id="top-margin-menu"></div>
        <div className="position-relative">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/beweeg" element={<Beweeg />} />
          </Routes>
          <Routes>
            <Route path="/testimonails" element={<Testimonails />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Routes>
            <Route path="/mailchimp" element={<MailchimpFormContainer />} />
          </Routes>
          <Routes>
            <Route
              path="/testimonials_geschreven"
              element={<Testimonials_geschreven />}
            />
          </Routes>
          <Routes>
            <Route path="/specialisaties" element={<Specialisaties />} />
          </Routes>
          <Routes>
            <Route path="/eet" element={<Eet />} />
          </Routes>
          <Routes>
            <Route path="/aanbod" element={<Aanbod />} />
          </Routes>
          <Routes>
            <Route path="/ontmoet" element={<Ontmoet />} />
          </Routes>
          <Routes>
            <Route path="/leef" element={<Leef />} />
          </Routes>
          <Routes>
            <Route path="/faq" element={<VeelgesteldeVragen />} />
          </Routes>
          <Routes>
            <Route path="/fit4life" element={<Fit4life />} />
          </Routes>
          <Routes>
            <Route path="/fit&flex" element={<FitNflex />} />
          </Routes>
          <Routes>
            <Route path="/healthyboost" element={<Healthyboost />} />
          </Routes>
        </div>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
