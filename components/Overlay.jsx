// /* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import "./Overlay.css";

const Overlay = ({ showOverlay, onClose }) => {
  const overlayStyle = {
    display: showOverlay ? "grid" : "none",
    position: "fixed",
    top: 75,
    left: 0,
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    height: "100%",
    background: "white",
    zIndex: 1000,
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div className="menu-test">
        <div className="menu-flexbox">
          <div className="menu-flexbox-links">
            <img src="https://dummyimage.com/400x500.jpg?text=Image" alt="" />
          </div>
          <div className="menu-flexbox-rechts">
            <ul>
              <li>
                <Link to="/">home.</Link>
              </li>
              <li>
                <Link to="/ontmoet">ontmoet.</Link>
              </li>
              <li>
                <Link to="/specialisaties">specialisaties.</Link>
              </li>
              <li>
                <Link to="/eet">eet.</Link>
              </li>
              <li>
                <Link to="/leef">leef.</Link>
              </li>
              <li>
                <Link to="/aanbod">aanbod.</Link>
              </li>
              <li>
                <Link to="/faq">faq.</Link>
              </li>
              <li>
                <Link to="/contact">contact.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
