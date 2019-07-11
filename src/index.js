import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './index.css'
import { ResultsProvider } from './contexts/ResultsContext'


ReactDOM.render(
  <ResultsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultsProvider>,
 document.getElementById('root'));



