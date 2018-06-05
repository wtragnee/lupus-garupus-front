import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CreateGame from './CreateGame';
import Stream from './Stream';
// const Nav = require('./Nav');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/create-game" component={CreateGame} />
            <Route path="/stream" component={Stream} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
