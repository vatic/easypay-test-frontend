import React, { Component } from 'react';
import { Search, Label } from 'semantic-ui-react';

export default class SearchPhone extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.phone })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: this.props.isFetching, value });
    if (value.length > 2) this.props.checkPhone(value);
  }

  resultRenderer = ({ phone }) => <Label horizontal size='large' color='purple' content={phone} />

  render() {
    return (
      <Search
      minCharacters={3}
      onSearchChange={this.handleSearchChange}
      onResultSelect={this.handleResultSelect}
      results={this.props.check.results}
      value={this.state.value}
      resultRenderer={this.resultRenderer}
      />
    );
  }
}
