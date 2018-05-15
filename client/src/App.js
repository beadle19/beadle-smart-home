import React, { Component } from 'react'
import Menu from './components/sh-menu/menu/'
import Categories from './components/categories'
import Header from './components/header'
import './App.css'
import './components/third-party/fonts/flaticon.css'

class App extends Component {
  state = {
    response: '',
    pythonMessage: '',
    menuExpanded: false
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body
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

  // Toggles menu expanded
  expandMenu = () => {
    console.log('expanded')
    this.setState( (state) => { 
      let menuExpanded
      menuExpanded = state.menuExpanded ? false : true
      return {menuExpanded : menuExpanded}
    })
  }

  render() {
    let appContentsShrink = this.state.menuExpanded ? ' shrink' : ''
    let appContentsClasses = 'App-contents' + appContentsShrink

    return (
      <div className='Home-Background'>
        <Menu expandMenu = {this.expandMenu}
          menuExpanded = {this.state.menuExpanded} />
        <div className = {appContentsClasses}>
          <Header />
          <Categories />
        </div>
      </div>
    )
  }
}

export default App;
