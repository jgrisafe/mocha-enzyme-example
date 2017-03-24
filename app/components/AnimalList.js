import React, { Component, PropTypes } from 'react';

class AnimalList extends Component {
  render() {
    return this.props.items 
    ? (
      <ul>
        {this.props.items.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    )
    : null
  }
}

AnimalList.PropTypes = {
  items: PropTypes.array.isRequired
}

export default AnimalList;