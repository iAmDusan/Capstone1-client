import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FavoriteContext from '../../contexts/FavoriteContext'
import FavoriteApiService from '../../services/favorite-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import { FavoriteStarRating } from '../../components/FavoriteStarRating/FavoriteStarRating'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './FavoritePage.css'

export default class FavoritePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = FavoriteContext

  componentDidMount() {
    const { favoriteId } = this.props.match.params
    this.context.clearError()
    FavoriteApiService.getFavorite(favoriteId)
      .then(this.context.setFavorite)
      .catch(this.context.setError)
    FavoriteApiService.getFavoriteReviews(favoriteId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearFavorite()
  }

  renderFavorite() {
    const { favorite, reviews } = this.context
    return <>
      <div className='FavoritePage__image' style={{backgroundImage: `url(${favorite.image})`}} />
      <h2>{favorite.title}</h2>
      <FavoriteContent favorite={favorite} />
    </>
  }

  render() {
    const { error, favorite } = this.context
    let content
    if (error) {
      content = (error.error === `Favorite doesn't exist`)
        ? <p className='red'>Favorite not found</p>
        : <p className='red'>There was an error</p>
    } else if (!favorite.id) {
      content = <div className='loading' />
    } else {
      content = this.renderFavorite()
    }
    return (
      <Section className='FavoritePage'>
        {content}
      </Section>
    )
  }
}

function FavoriteContent({ favorite }) {
  return (
    <p className='FavoritePage__content'>
      {favorite.content}
    </p>
  )
}

