import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class BruteForce extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Brute Force</h1>
      <h5>the most famous method</h5>

      <p>Brute force will always give you the right answer and is usually fast to implement.  The problem, of course, is that it is slow.  If the problem can be solved within the time constraints using brute force, do it.  It usually means generating all possible solutions and testing each one.  </p>

      <h3>Using Recursion</h3>
      </div>
    )
  }
}

export default BruteForce
