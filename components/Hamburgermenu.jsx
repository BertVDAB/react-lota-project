import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import Overlay from "./Overlay";

import './hamburgermenu.css'

import Context from '../App'

export default function Hamburgermenu() {
  const [isAnyBgDarkDivAtTop, setIsAnyBgDarkDivAtTop] = useContext(Context);
  
  return (
    <>
      <div id="hamburgermenu">
        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </>
  );
}
