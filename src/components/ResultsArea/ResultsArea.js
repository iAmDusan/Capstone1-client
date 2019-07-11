import React, { Component } from 'react';
import ResultsContext from '../../contexts/ResultsContext';

import './ResultsArea.css';

export default class ResultsArea extends Component {
  static contextType = ResultsContext;

  renderResults() {
    const { query, queryResults } = this.context;
    const unixTime = new Date(queryResults.currently.time * 1000);
    const formatted = unixTime.toISOString();
    console.log('Fetched API time:', unixTime);
    console.log('Formatted API time:', formatted);
    console.log('Full Unix Time to ms:', queryResults.currently.time * 1000);

    return (
      <div>
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
