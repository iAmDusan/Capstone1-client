import React, { Component } from 'react'

class App extends Component {
  state = {
    data: null,
    error: null,
  };

  onClick = () => {
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
          <input type='text' ref='place' placeholder='Enter a Place' /> <br />
          <br />
          <button onClick={this.onClick}> Search </button>
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
          <h4>FULL DATASTREAM:<br /></h4>
          <p>{JSON.stringify(this.state.data)}</p>
        </div>
      );
    }
  }
}

export default App