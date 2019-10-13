import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Bit extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Bit Manipulation</h1>

        <p>Bitwise operators are fast and can do more than people usually expect.  For example, did you know the following tricks?</p>

        <h2>AND/OR/XOR</h2>
        <p>In Python, you can use the bitwise AND, OR, and XOR with the '&', '|', and "^" operations, respectively.  Here are some examples:</p>
        <Code>
{`2 | 5 => 7
# in binary:
# 010 is 2
# 101 is 5
# 111 is 7

2 & 5 => 0
# 010
# 101
# 000

2 ^ 5 => 7
# 010 # XOR is 1/0 or 0/1 but not 1/1 or 0/0
# 101
# 111`}
        </Code>

        <h2>Converting between binary and decimal</h2>
        <p>In Python, the bin function will convert a number into a string that is the number's representation in binary, whereas passing 2 into the int() function will convert a binary string back into int</p>

        <Code>
{`bin(7) => "0b111"
bin(7)[2:] => "111"
int("111", 2) => 7`}
        </Code>

        <h2>Bit shifting</h2>
        <p>The bitshifting operators are &lt;&lt; and &gt;&gt;.  "x &lt;&lt; y" means take x as a binary number and shift it leftwards y times.  For example, 2 &lt;&lt; 3 makes "10" into "1<b>000</b>0", or 16.  It essentially just raised 2 to the 4th power, extremely quickly.  Likewise, 16 &gt;&gt; 3 will bring it back down to 2.</p>

        <h2>Applications of Bitwise Operations</h2>
        <p>Binary numbers can represent a small-ish number of things (like up to 32 0s or 1s) and provide lightning fast operations for those things.  So, bitwise operations are commonly used for algorithm optimization.  For example, instead of using expensive set operations (including for example, hashing), you can use a number in binary to represent a set, where each digit is 0 if that item is not in the set, and 1 if it is.  In addition, there are some problems that explicitly ask about bitwise operations like the ones you will see in the Bitwise problem set.  It is useful to know some of the following properties:</p>

        <ul>

      </ul>

      </div>
    )
  }
}

export default Bit;
