import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import MailchimpFormContainer from "./MailChimpContainer";

import { motion, useScroll, useTransform, useInView } from "framer-motion";


import "./footer.css";

import logo from "../img/logo.png";
import { color } from "framer-motion";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function Footer() {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const style = {
    position: "fixed",
    zIndex: "-1",
    bottom: "0",
  }

  return (
    <>

      {/* <motion.div style={{ scale }}> */}
        {/* <motion.div style={{ scaleY: scrollYProgress }}> */}
        <div className="footer-before"></div>
          <footer style={{style}}>
            <h1>Benieuwd wat ik voor jou kan betekenen?</h1>
            <h4>
              <Link to={"/contact"} className="underline">
                Contacteer mij
              </Link>{" "}
              voor een afspraak of meer info over mijn trajecten.
            </h4>
            <div className="footer-flexbox">
              <div className="footer--flex1">
                <div className="footer--flex1--content">
                  <ul className="footer-contact">
                    <a
                      href="https://www.google.com/search?q=Antoinette+Gross%C3%A9straat+25%2C+Brugge&sca_esv=591053097&sxsrf=AM9HkKm7KL6IWFjr-mkYk1_rfMdYP_dLUQ%3A1702616767688&ei=v957Za3LKaeti-gPjo6YsA4&oq=Antoinette+Gross%C3%A9straat+25+&gs_lp=Egxnd3Mtd2l6LXNlcnAiHEFudG9pbmV0dGUgR3Jvc3PDqXN0cmFhdCAyNSAqAggAMgIQJkj-EVCxBlixBnABeACQAQCYAVCgAZwBqgEBMrgBA8gBAPgBAcICChAAGEcY1gQYsAPiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <li>Antoinette Grosséstraat 25 </li>
                      <li>8000 Brugge</li>
                    </a>

                    <li>
                      <a href="tel: +32494983454">T: + 32(4)94 983 454</a>
                    </li>
                    <li>
                      <a href="mailto:info@lotalifestyle.be">
                        info@lotalifestyle.be
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer--flex2">
                <ul>
                  <Link to="/#">
                    <li>Home.</li>
                  </Link>
                  <Link to="/aanbod/#">
                    <li>Aanbod.</li>
                  </Link>
                  <Link to="/contact/#">
                    <li>Contact.</li>
                  </Link>
                  <Link to="/aanbod/#">
                    <li>Specialisaties.</li>
                  </Link>
                </ul>
              </div>
              <div className="footer--flex3">
                <ul>
                  <Link to="/eet/#">
                    <li>eet.</li>
                  </Link>
                  <Link to="/beweeg/#">
                    <li>beweeg.</li>
                  </Link>
                  <Link to="/leef/#">
                    <li>leef.</li>
                  </Link>
                </ul>
              </div>
              <div className="footer--flex4">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/lota.lifestyle/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.instagram.com/lota.lifestyle/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="footer--flex5">
                <MailchimpFormContainer></MailchimpFormContainer>
              </div>
            </div>
            <div className="footer-details">
              <ul>
                <li>
                  Erkend RIZIV-nummer: 5-64520-20-601 - BTW BE0765 711 268 -{" "}
                  <Link to="/disclaimer">disclaimer</Link> -{" "}
                  <Link to="/privacy">privacy policy</Link>{" "}
                </li>
              </ul>
            </div>

            <div className="copyright">
              <p>Copyright © 2023</p>
              <p>
                made by Bert Verbanck - illustrations by
                <a
                  href="https://www.instagram.com/lauradoodles__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  lauradoodles
                </a>
              </p>
            </div>
          </footer>
          
        {/* </motion.div> */}
      {/* </motion.div> */}
    </>
  );
}
