import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

class CreateGame extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.history.push('/thank-you');
  }

  isFormValid() {
    return this.isPseudoValid();
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
        </div>
      </form>
    );
  }
}

export default CreateGame;
