import React from 'react';
import { Collapse, Button, Row } from 'react-bootstrap';

const DEFAULT_CLIENT_MESSAGE = 'An error occured, please try again';

class ErrorLabel extends React.PureComponent {
  constructor({ error }) {
    super();
    this.clientMessage = error.clientMessage || DEFAULT_CLIENT_MESSAGE;
    this.stack = error.stack;

    this.state = {
      opened: false
    };
  }

  handleClick() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <div className="error-container row-mar-btm-1 row-mar-top-1">
        <div className="alert alert-danger">
          <Row>
            <div className="pull-left">{this.clientMessage}</div>
            <div className="pull-right">
              <Button bsStyle="danger" onClick={() => this.handleClick()}>
                See more
              </Button>
            </div>
          </Row>
        </div>
        <Collapse in={this.state.opened}>
          <div className="alert alert-danger">{this.stack}</div>
        </Collapse>
      </div>
    );
  }
}

export default ErrorLabel;
