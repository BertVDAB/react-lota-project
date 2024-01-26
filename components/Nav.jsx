import React from 'react'
import { useState } from "react";

import './Nav.css'


function Nav() {
const [isOpen, setIsOpen] = useState(false);
const ToggleClass = () => {
    setIsOpen(!isOpen);
}



  return (
    <>
    <div className="nav">
        <div className="nav-logo">Lota</div>
        <div onClick={ToggleClass}>BARS</div>

        <div onClick={ToggleClass} className={isOpen ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-list">
                <li className="nav-menu-item">Lorem.</li>
                <li className="nav-menu-item">Soluta!</li>
                <li className="nav-menu-item">Doloremque?</li>
                <li className="nav-menu-item">Eum?</li>
                <li className="nav-menu-item">Enim.</li>
                <li className="nav-menu-item">Fugiat.</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav