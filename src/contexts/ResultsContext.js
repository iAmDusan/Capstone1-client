import React, { Component } from 'react'

const ResultsContext = React.createContext({
  query: null,
  queryResults: null,
  error: null,
  user: null,
  isLoggedIn: false,
  userFavorites: [],
  setQuery: () => {},
  setLogin: () => {},
  setLogout: () => {},
  setUser: () => {},
  clearUser: () => {},
  setError: () => {},
  clearError: () => {},
  setQueryResults: () => {},
  clearQueryResults: () => {},
 
})

export default ResultsContext

export class ResultsProvider extends Component {
  state = {
    query: null,
    queryResults: null,
    error: null,
    user: null,
    isLoggedIn: false,
    userFavorites: [],
  };

  setQuery = query => {
    this.setState({ query })
  }
  setLogin = () => { 
    this.setState({ isLoggedIn: true})
  }
  setLogout= () => { 
    this.setState({ isLoggedIn: false})
  }
  setUser = user => {
    this.setState({ user })
  }
  clearUser = () => {
    this.setState({ user: null })
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }
  clearError = () => {
    this.setState({ error: null })
  }
  setQueryResults = queryResults => {
    this.setState({ queryResults })
  }
  clearQueryResults = () => {
    this.setState({ queryResults: null })
  }

  render () {
    const value = {
      query: this.state.query,
      queryResults: this.state.queryResults,
      error: this.state.error,
      user: this.state.user,
      isLoggedIn: this.state.isLoggedIn,
      userFavorites: this.state.userFavorites,
      setLogin: this.setLogin,
      setLogout: this.setLogout,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setError: this.setError,
      clearError: this.clearError,
      setQuery: this.setQuery,
      setQueryResults: this.setQueryResults,
      clearQueryResults: this.clearQueryResults,

    }
    return (
      <ResultsContext.Provider value ={value}>
        {this.props.children}
      </ResultsContext.Provider>
    )
  }
}

