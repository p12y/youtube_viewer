import React, {Component} from 'react';
import { Input, Grid, Header } from 'semantic-ui-react';

export default class SearchBar extends Component {
  render() {
    return (
      <Input size='large' fluid icon='search' placeholder='Search videos...' />
    );
  }
}