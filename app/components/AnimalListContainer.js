import React, {Component} from 'react';

import InputArea from './InputArea'
import AnimalList from './AnimalList'

class AnimalListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
    }
  }

  addItem = (item) => {
    if (!item) { return false }
    if (this.state.animals.indexOf(item) === -1) {
      this.setState({ animals: [...this.state.animals, item] })
    }
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <AnimalList items={this.state.animals} />
      </div>
    );
  }
}

export default AnimalListContainer