import React, { Component } from 'react'

const FavoriteListContext = React.createContext({
  favoriteList: [],
  error: null,
  data: null,
  setError: () => {},
  clearError: () => {},
  setFavoriteList: () => {},
})
export default FavoriteListContext

export class FavoriteListProvider extends Component {
  state = {
    favoriteList: [],
    error: null,
    data: null,
  };

  setFavoriteList = favoriteList => {
    this.setState({ favoriteList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      favoriteList: this.state.favoriteList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFavoriteList: this.setFavoriteList,
    }
    return (
      <FavoriteListContext.Provider value={value}>
        {this.props.children}
      </FavoriteListContext.Provider>
    )
  }
}
