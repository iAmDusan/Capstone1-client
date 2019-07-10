import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import QueryArea from '../QueryArea/QueryArea';
import ResultsArea from '../ResultsArea/ResultsArea'

class App extends Component {
  state = {
    data: null,
    error: null,
  };


  render() {
    if(!this.state.data) {


      return (
        <div>
          <Header />
          <QueryArea />
        </div>
      );


    } else {
      return (
        <div>
        <Header />
        <ResultsArea />
        </div>
      )

    }
  }
}

export default App