import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'

import ResultsPage from '../../routes/ResultsPage/ResultsPage'
import FavoritesListPage from '../../routes/FavoritesListPage/FavoritesListPage'
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
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
          <br/>
          <QueryArea />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={ResultsPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/favorites'}
              component={FavoritesListPage}
            />
          </Switch>
        </main>
      </div>
    )

  }
}

export default App