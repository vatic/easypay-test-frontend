import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

export default class SearchPhone extends Component {
  handleSearchChange = (e, { value }) => {
    this.props.checkPhone(value);
  }
  render() {
    console.log(this.props);
    return (
      <Search
      minCharacters={1}
      onSearchChange={this.handleSearchChange}
      />
    )
  }
}
