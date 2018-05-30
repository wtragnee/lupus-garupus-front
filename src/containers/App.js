import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// const Nav = require('./Nav');
import Home from './Home';
import CreateGame from './CreateGame';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* <Nav /> */}
          <Switch>
            <Route path="/create-game" component={CreateGame} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
