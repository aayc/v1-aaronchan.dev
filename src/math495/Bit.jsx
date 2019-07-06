import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Bit extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Bit Manipulation</h1>

      <p>Some problems will require you to work with AND, OR, XOR, NAND, etc.  Bitwise manipulation is a tricky topic and can be intimidating, but thankfully Python simplifies a lot of the heavy lifting for us.  Bitwise operators are often relatively fast (see AWESOME COMBINATIONS TRICK) so even if a problem doesn't explicitly require bitwise operations, they may still come in handy.</p>

      <h3>Conversion between Bases</h3>
      
      <p>Python 3 has built-in methods that assist in base conversions.  A few of them are as follows:</p>

      <Code>
{`s = "110001101"
`}
      </Code>
      
      <h3>Properties of AND/OR</h3>

      <h3>Properties of XOR</h3>

      <h3>THE POWER</h3>
      <p>Hacker's delight</p>
      </div>
    )
  }
}

export default Bit;
