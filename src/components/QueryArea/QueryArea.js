import React, { Component } from 'react';
import ResultsContext from '../../contexts/ResultsContext'
import config from '../../config';

export default class QueryArea extends Component {

  static contextType = ResultsContext

  onClick = e => {
    e.preventDefault();
    const serverURL = `${config.API_ENDPOINT}/`;
      fetch(`${serverURL}${this.refs.place.value}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.context.setQueryResults(res)
        })
        .then( () => {
          console.log(this.context)
        }
        )
        .catch(error => {
          console.log('Something went wrong', error);
          this.context.setError(error)
        });
  };

  render() {
    return (
      <div className="query">
        <form onSubmit={this.onClick}>
          <input type="text" ref="place" placeholder="Enter a Place" minLength="3" required /> <br />
          <br />
          <button type="submit"> Search </button>
        </form>
      </div>
    );
  }
}
