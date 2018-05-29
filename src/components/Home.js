import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/App.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <div className="row col-12 justify-content-center">
          <Link className="text-center col-6" to="/create-game">
            <Button className="btn btn-primary btn-lg btn-block">
              Create new game
            </Button>
          </Link>
        </div>
        <div className="row col-12 justify-content-center">
          <Link className="text-center col-6" to="/join-game">
            <Button className="btn btn-primary btn-lg btn-block">
              Join a game
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
