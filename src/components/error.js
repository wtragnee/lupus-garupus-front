import React from 'react';
import { Collapse, Button } from 'react-bootstrap';

const DEFAULT_CLIENT_MESSAGE = 'An error occured, please try again';

class ErrorLabel extends React.PureComponent {
  constructor({ error }) {
    super();
    this.clientMessage = error.clientMessage || DEFAULT_CLIENT_MESSAGE;
    this.message = error.message;
    this.stack = error.stack;

    this.state = {
      opened: false
    };
  }

  render() {
    return (
      <div>
        <div className="row-mar-top-1 row-mar-btm-1 alert alert-danger">
          <Button onClick={this.handle({ opened: !this.state.opened })}>
            {this.clientMessage}
          </Button>
        </div>
        <Collapse in={this.state.opened}>
          <div className="row-mar-top-1 row-mar-btm-1 alert alert-danger">
            {this.stack}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ErrorLabel;
