import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.handleSearch(event.target.value);
  }

  render() {
    return (
      <Input 
      size='large' 
      fluid icon='search' 
      placeholder='Search videos...' 
      onChange={this.handleInputChange} />
    );
  }
}