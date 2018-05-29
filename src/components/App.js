import { Component } from 'react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// const Nav = require('./Nav');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          {/* <Nav /> */}
          <Switch>
            <Route render={() => (<p>Not Found</p>)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
