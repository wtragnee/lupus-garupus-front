import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// const Nav = require('./Nav');
import Home from './Home';

// Example: https://github.com/tylermcginnis/react-fundamentals/tree/hosting/app/components

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* <Nav /> */}
          <Switch>
            <Route path='/home' component={Home} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
