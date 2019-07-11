import React, { Component } from 'react';
import ResultsContext from '../../contexts/ResultsContext'

export default class QueryArea extends Component {

  static contextType = ResultsContext

  onClick = e => {
    e.preventDefault();
    const serverURL = 'http://localhost:8000/api/';
    if (this.refs.place.value.length < 3) {
      alert('Enter a valid location. Must be at least 3 characters.');
    } else {
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
    }
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
