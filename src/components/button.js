import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class CreateGameButton extends React.PureComponent {
  constructor({ path, text }) {
    super();
    this.path = path;
    this.text = text;
  }

  static get propTypes() {
    return {
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    };
  }

  render() {
    return (
      <Link className="text-center col-6" to={this.path}>
        <Button className="btn btn-success btn-lg btn-block">
          {this.text}
        </Button>
      </Link>
    );
  }
}

export default CreateGameButton;
