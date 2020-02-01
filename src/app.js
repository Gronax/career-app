import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import NoMatch from './containers/NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={NoMatch} />
          <Route exact path="/joblist" component={NoMatch} />
          <Route exact path="/jobdetail/:id" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;