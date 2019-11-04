import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Dp extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Dynamic Programming</h1>

        <p>Dynamic programming is a technique that is essentially recursion but instead of storing computation on the stack, it is stored in an array.  It is used when the problem asks you to:</p>
        <ul>
          <li>Maximize or minimize something</li>
          <li>Count the number of possibilities (often these are DP)</li>
          <li>Greedy doesn't work (e.g. non-canonical coin system)</li>
        </ul>

        <h3>Approaching a DP Problem</h3>
        <p>It turns out that dynamic programming problems are <i>usually</i> a lot of thinking but not a lot of coding.  Much like recursion, you should start with the smallest case - most times you'll be asking yourself "let's say I have just ONE/TWO/THREE x, what would I do?"  Then, for the next cases that get more complicated, how would you incorporate the previous best solution (you can assume you have the previous best solution) into the current solution?  Sometimes this thinking manifests itself in "choices", like "choose x, choose y, or keep the previous best."</p>

        <p>Frankly, there is no magic bullet for becoming good at dynamic programming - or if there is, I haven't found it yet.  One way to slowly improve is to be exposed to several different types of dynamic programming problems and work through how to solve them.</p>

      </div>

    )
  }
}

export default Dp;
