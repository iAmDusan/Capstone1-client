import React, { Component } from 'react';
import ResultsContext from '../../contexts/ResultsContext';
import ResultsArea from '../../components/ResultsArea/ResultsArea';

export default class ResultsPage extends Component {
  
  static contextType = ResultsContext;

  componentWillUnmount() {
    this.context.clearQueryResults();
  }

  render() {
    return (
      <div>
        <ResultsArea />
      </div>
    );
  }
}
