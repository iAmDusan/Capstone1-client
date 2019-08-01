import React, { Component } from 'react';
import ResultsContext from '../../contexts/ResultsContext';
import FavoriteApiService from '../../services/favorite-api-service'

import './ResultsArea.css';

export default class ResultsArea extends Component {
  static contextType = ResultsContext;

  addFavorite(title, content) {
    console.log(title, content)
    FavoriteApiService.postFavorite(title, content)
    
  }
  renderResults() {

    const { query, queryResults } = this.context;
    console.log(query, queryResults)
    
    const unixTime = new Date(queryResults.currently.time * 1000);
    const formatted = unixTime.toISOString();
    console.log('Fetched API time:', unixTime);
    console.log('Formatted API time:', formatted);
    console.log('Full Unix Time to ms:', queryResults.currently.time * 1000);

    return (
      <div className="results-body">
        <h2>Results for {query} </h2>
        <p>{queryResults.features[0].place_name}</p>
        <h4>Current Precipitation: {queryResults.currently.summary}</h4>
        <h4>
          Precipitation Forecast: {queryResults.currently.precipProbability} %
        </h4>
        <h4>
          Current Temperature: {queryResults.currently.temperature}{' '}
          &deg;Fahrenheit
        </h4>
        <h5>Unix Timestamp: {queryResults.currently.time}</h5>
        <h5>Formatted Timestamp {formatted} </h5>
        <button type="button" onClick={ () => this.addFavorite(queryResults.features[0].place_name, query )} >Add Favorite </button>
      </div>
    );
  }

  render() {
    if (this.context.queryResults !== null) {
      return this.renderResults();
    } else {
      return null;
    }
  }
}
