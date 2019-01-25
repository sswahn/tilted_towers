import React, { Component } from 'react'
import './styles/App.css'
import ScoreBoard from './components/ScoreBoard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solo: [],
      duo: [],
      squad: []
    }
  }
  componentWillMount() {
    this.props.data.then(x =>
      this.setState({
        solo: x.segments[5].stats,
        duo: x.segments[3].stats,
        squad: x.segments[4].stats
      })
    )
  }
  render() {
    if (this.state.solo.length < 1) {
      return <div></div>
    }
    return (
      <div className="app">
        <ScoreBoard mode="Solo" stats={this.state.solo} />
        <ScoreBoard mode="Duo" stats={this.state.duo} />
        <ScoreBoard mode="Squad" stats={this.state.squad} />
      </div>
    )
  }
}

export default App