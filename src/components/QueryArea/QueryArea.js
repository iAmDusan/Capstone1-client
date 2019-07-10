import React, { Component } from 'react';

export default class QueryArea extends Component {
  onClick = e => {
    e.preventDefault();
    const serverURL = 'http://localhost:8001/api/';
    if (this.refs.place.value.length < 3) {
      alert('Enter a valid location. Must be at least 3 characters.');
    } else {
      fetch(`${serverURL}${this.refs.place.value}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            data: res
          });
        })
        .catch(error => {
          console.log('Something went wrong', error);
          this.setState({
            error
          });
        });
    }
  };

  render() {
    return (
      <div className="query">
        <form onSubmit={this.onClick}>
          <input type="text" ref="place" placeholder="Enter a Place" /> <br />
          <br />
          <button type="submit"> Search </button>
        </form>
      </div>
    );
  }
}
