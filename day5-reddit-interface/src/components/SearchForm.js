import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-container">
        <div className="search-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
