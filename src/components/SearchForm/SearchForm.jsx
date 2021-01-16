import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    formData: {
      query: "", //Has to match the input name
    },
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({ formData });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLocationSearch(this.state.formData);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='query'
            value={this.state.formData.query}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
