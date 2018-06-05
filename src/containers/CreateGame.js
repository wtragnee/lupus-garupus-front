import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

import RequestManager from '../helper/RequestManager';
import ErrorLabel from '../components/error';

class CreateGame extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitting: false,
      error: undefined
    };
    this._rp = new RequestManager({});
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        submitting: true
      },
      () =>
        this._rp
          .get({ uri: '/ping' })
          .then(({ pong }) => {
            // eslint-disable-next-line react/prop-types
            this.props.history.push(`/game?token=${pong}`);
          })
          .catch(err => {
            this.setState({
              submitting: false,
              error: {
                message: err.message,
                stack: err.stack
              }
            });
          })
    );
  }

  isFormValid() {
    return this.isPseudoValid() && !this.state.submitting;
  }

  isPseudoValid() {
    return 0 !== _.size(this.state.value);
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div className="form-group">
          <div className="row-mar-top-1 row-mar-btm-1">
            <input
              id="pseudo"
              type="text"
              value={this.state.value}
              className={`form-control ${
                this.isPseudoValid() ? 'is-valid' : 'is-invalid'
              }`}
              placeholder="Pseudo"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className="row-mar-top-1 row-mar-btm-1">
            <Button
              type="submit"
              className={`btn btn-success btn-lg btn-block ${
                this.isFormValid() ? 'is-valid' : 'is-invalid'
              }`}
              disabled={!this.isFormValid()}
            >
              Create!
            </Button>
          </div>
          {this.state.error && <ErrorLabel error={this.state.error} />}
        </div>
      </form>
    );
  }
}

export default CreateGame;
