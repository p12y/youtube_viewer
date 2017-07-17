import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({term: event.target.value});
    this.props.handleSearch(event.target.value);
  }

  render() {
    return (
      <Input 
      value={this.state.term}
      size='large' 
      fluid icon='search' 
      placeholder='Search videos...' 
      onChange={this.handleInputChange} />
    );
  }
}