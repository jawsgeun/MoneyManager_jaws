import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <button>기본</button>
        <Button bsStyle="primary" bsSize="small">Primary</Button>
      </div>
    );
  }
}

export default App;
