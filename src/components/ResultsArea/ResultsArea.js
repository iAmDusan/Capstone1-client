import React, { Component } from 'react'
import FavoriteListContext from '../../contexts/FavoriteListContext'
import FavoriteApiService from '../../services/favorite-api-service'

import './ResultsArea.css'

export default class ResultsArea extends Component {
  static contextType = FavoriteListContext

  componentDidMount() {
    this.context.clearError()
    FavoriteApiService.getFavorites()
      .catch(this.context.setError)
  }

render() {
  return (
    <div className="result">
      <h3>Place: {this.context.data.features[0].place_name}</h3>
      <h4>Current Precipitation: {this.context.data.currently.summary}</h4>
      <h4>
        Probable Precipitation:{" "}
        {this.context.data.currently.precipProbability}%
      </h4>
      <h4>
        Current Temperature: {this.context.data.currently.temperature} &deg;F
      </h4>
    </div>
  );
}
}