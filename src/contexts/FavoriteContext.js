import React, { Component } from 'react'

export const nullFavorite = {
  author: {},
  tags: [],
}

const FavoriteContext = React.createContext({
  favorite: nullFavorite,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setFavorite: () => {},
  clearFavorite: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default FavoriteContext

export class FavoriteProvider extends Component {
  state = {
    favorite: nullFavorite,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setFavorite = favorite => {
    this.setState({ favorite })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearFavorite = () => {
    this.setFavorite(nullFavorite)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      favorite: this.state.favorite,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFavorite: this.setFavorite,
      setReviews: this.setReviews,
      clearFavorite: this.clearFavorite,
      addReview: this.addReview,
    }
    return (
      <FavoriteContext.Provider value={value}>
        {this.props.children}
      </FavoriteContext.Provider>
    )
  }
}
