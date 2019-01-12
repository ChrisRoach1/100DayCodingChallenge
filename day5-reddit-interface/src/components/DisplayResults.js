import React, { Component } from "react";

class DisplayResults extends Component {
  createResultsList = () => {
    var results = this.props.results;
    return (
      <div>
        {results.map(result => {
          return (
            <div key={result.retrieved_on} className="result-card">
              <h3>{result.title}</h3>
              <h4>
                <a href={result.full_link}>{result.full_link}</a>
              </h4>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return <div className="main-results">{this.createResultsList()}</div>;
  }
}

export default DisplayResults;
