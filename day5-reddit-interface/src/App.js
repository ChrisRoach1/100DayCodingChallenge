import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import DisplayResults from "./components/DisplayResults";

class App extends Component {
  state = {
    searchTerm: "",
    results: []
  };

  setSearchTerm = term => {
    this.setState({
      searchTerm: term
    });
    this.getResults(term);
  };

  getResults = async searchTerm => {
    let api = null;
    let results = null;
    if (searchTerm.trim() !== "") {
      api = await fetch(
        "http://api.pushshift.io/reddit/submission/search/?subreddit=" +
          searchTerm +
          "&after=1483228800&before=1514764800&limit=10"
      );
      results = await api.json();
      this.setState({
        results: results.data
      });
    } else {
      alert("Please provide a search term!");
    }
  };

  render() {
    return (
      <div className="main-reddit">
        <h1>REDDIT SEARCH</h1>
        <React.Fragment>
          <SearchForm setSearch={this.setSearchTerm} />
          <DisplayResults results={this.state.results} />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
