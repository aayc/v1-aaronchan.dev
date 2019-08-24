import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class BruteForce extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Brute Force</h1>
      <h5>the most famous method</h5>

      <p>todo</p>
      </div>
    )
  }
}

export default BruteForce
