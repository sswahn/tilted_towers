import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Scout from './scout'
import * as serviceWorker from './serviceWorker'

render(
  <Router>
    <div>
      <Route exact path="/" render={(props) => 
        <App {...props} data={Scout.init()} />
      } />
      <Route exact path="/not-tfue" render={(props) => 
        <App {...props} data={Scout.init('Not Tfue')} />
      } />
    </div>
  </Router>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
// Example API call using Scout SDK.
Scout.init()
