import React from 'react'
import '../styles/Header.css'

const Header = ({ mode, matches, kills, KDratio, wins }) =>
  <div className="header">
    <div className="header-top">
      <h3>{mode}</h3>
      <div className="header-top-content">
        <span>Matches</span> 
        <span>{matches}</span>
      </div>
      <div className="header-top-content">
        <span>Kills</span> 
        <span>{kills}</span>
      </div>
    </div>
    <div className="header-bottom">
      <div className="header-bottom-content">
        <div>{KDratio.toFixed(2)}</div>
        <div>K/D Ratio</div>
      </div>
      <div className="header-bottom-content">
        <div>{wins}</div>
        <div>Wins</div>
      </div>
    </div>
  </div>

export default Header
