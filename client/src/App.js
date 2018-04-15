import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: '',
    pythonMessage: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callPythonScript = () => {
    fetch('/api/python')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({pythonMessage: result.message})
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <input type="button" value="test" onClick={this.callPythonScript}/>
        <h1>{ this.state.pythonMessage}</h1>
      </div>
    );
  }
}

export default App;
