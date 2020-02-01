import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import JobSearch from './containers/JobSearch'
import NoMatch from './containers/NoMatch'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JobSearch} />
        <Route exact path="/joblist" component={JobSearch} />
        <Route exact path="/jobdetail/:id" component={NoMatch} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App