import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './index.css';
import FormContainer from './container/formContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;