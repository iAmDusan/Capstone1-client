import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    data: null,
    error: null,
  };

  onClick = e => {
    e.preventDefault()
    const serverURL = "http://localhost:8000/api/";
    if (this.refs.place.value.length < 3) {
      alert("Enter a valid location. Must be at least 3 characters.")
    } else {
      fetch(`${serverURL}${this.refs.place.value}`)
      .then (res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          data: res
        });
      })
      .catch(error => {
        console.log("Something went wrong", error);
        this.setState({
          error
        });
      });
    }
  };

  render() {
    if(!this.state.data) {
      return (
        <div className='query'>
          <form onSubmit={this.onClick}>
          <input type='text' ref='place' placeholder='Enter a Place' /> <br />
          <br />
          <button type="submit"> Search </button>
          </form>
        </div>
      );
    } else {
      const unixTime = new Date(this.state.data.currently.time*1000)
      const formatted = unixTime.toISOString()
      console.log("Fetched API time:", unixTime)
      console.log("Formatted API time:", formatted)
      console.log("Full Unix Time to ms:", this.state.data.currently.time*1000)

      return (
        <div className='result'>
          <h4>Place: {this.state.data.features[0].place_name}</h4>
          <h4>Current Precipitation: {this.state.data.currently.summary}</h4>
          <h4>
            Precipitation Forecast: {' '}
            {this.state.data.currently.precipProbability} %
          </h4>
          <h4>Current Temperature: {this.state.data.currently.temperature} &deg;Fahrenheit</h4>
          <h5>Unix Timestamp: {this.state.data.currently.time}</h5>
          <h5>Formatted Timestamp {formatted} </h5>
          <h2>FULL DATASTREAM:<br /></h2>
          <p> data can go here</p>
        </div>
      );
    }
  }
}

export default App