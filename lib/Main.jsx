import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';

import Gravatar from './Gravatar'


class Main extends Component {
  render() {
    return (
      <div>
        <Gravatar />
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.querySelector('#root'));