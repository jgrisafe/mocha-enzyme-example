import React, { Component, PropTypes } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  setText = (e) => {
    this.setState({ text: e.target.value })
  }

  handleClick = () => {
    this.props.onSubmit(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

InputArea.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default InputArea;