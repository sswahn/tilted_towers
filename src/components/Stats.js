import React from 'react'
import '../styles/Stats.css'

const Stats = ({ stat, value, rank = 1 }) => {
  const modValue = value % 1 !== 0 ? value.toFixed(2) : value
  return (
    <div className="stats">
      <div className="stats-content">
        <span>{stat}</span>
        <span>{modValue}</span>
      </div>
      <meter className="stats-meter" value={value} min="" max=""></meter>
      <div>Rank#{rank}</div>
    </div>
  )
}

export default Stats
