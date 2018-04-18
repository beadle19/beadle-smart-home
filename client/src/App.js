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
      <div className="Home-Background">
      </div>
    );
  }
}

export default App;
