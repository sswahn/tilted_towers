import React from 'react'
import '../styles/Scoreboard.css'
import Header from './Header'
import Stats from './Stats'

const ScoreBoard = ({ mode, stats }) =>
  <div className="scoreboard">
    <Header 
      mode={mode}
      matches={stats[2].value}
      kills={stats[0].value}
      KDratio={stats[8].value}
      wins={stats[3].value}
    />
    <div className="scoreboard-stats">
      <Stats stat="Kills" value={stats[0].value} //rank={}
      />
      <Stats stat="Score" value={stats[1].value} //rank={}
      />
    </div>
    <div className="scoreboard-stats">
      <Stats stat="Top 12" value={stats[6].value} // % //rank={}
      />
      <Stats stat="Top 25" value={stats[7].value} //rank={}
      />
    </div>
    <div className="scoreboard-stats">
      <Stats stat="Matches" value={stats[2].value} //rank={}
      />
      <Stats stat="Kills" value={stats[8].value} //rank={}
      />
    </div>
  </div>

export default ScoreBoard
