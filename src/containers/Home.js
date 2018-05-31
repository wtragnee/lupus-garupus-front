import React from 'react';
import '../css/App.css';
import Button from '../components/button';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <div className="row col-12 justify-content-center row-mar-top-1 row-mar-btm-1">
          <Button path="/create-game" text="Create new game" />
        </div>
        <div className="row col-12 justify-content-center row-mar-top-1 row-mar-btm-1">
          <Button path="/join-game" text="Join game" />
        </div>
      </div>
    );
  }
}

export default Home;
