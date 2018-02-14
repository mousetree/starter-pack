import React, { Component } from 'react';

class App extends Component {

  state = {
    things: []
  }

  componentDidMount() {
    fetch('/api/things')
      .then(result => result.json())
      .then(things => this.setState({things}))
  }

  render() {
    return (
      <div className="App">
        <h1>Starter Pack</h1>
        <p>Here are some things retrieved from the API and database:</p>
        <ul>
          {this.state.things.map((thing,idx) => <li key={idx}>{thing.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
