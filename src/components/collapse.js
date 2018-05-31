import React from 'react';
import { Collapse, Button } from 'react-bootstrap';

class CollapseTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  handleCollapse() {
    this.setState({ opened: !this.state.opened })
  }

  render() {
    return (
      <div>
        <div className="alert alert-danger">
          <Button onClick={this.handleCollapse.bind(this)}>
            Click here!
          </Button>
        </div>
        <div>
          <Collapse show={this.state.opened}>
            <div className="alert alert-danger">Opened</div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default CollapseTest;
