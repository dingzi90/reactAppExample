import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class GroceryList extends Component {
  render() {
    return (
      <ul>
      		<ListItem  quantity="1">Bread</ListItem>
      		<ListItem  quantity="6">Eggs</ListItem>
      		<ListItem  quantity="7">Milk</ListItem>
      </ul>
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <li>
      		{this.props.quantity}*{this.props.children}
      </li>
    );
  }
}

export default GroceryList;