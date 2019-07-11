import React, { Component } from 'react'

const ResultsContext = React.createContext({
  query: null,
  queryResults: null,
  error: null,
  user: null,
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
  };

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
      setUser: this.setUser,
      clearUser: this.clearUser,
      setError: this.setError,
      clearError: this.clearError,
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

