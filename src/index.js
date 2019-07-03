import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/App';
import './index.css'
function App() {
  return (
    <div className="App">
      <h2>Darksky and Mapbox(geocoding) API test</h2>
      <hr />
      <Search />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));



