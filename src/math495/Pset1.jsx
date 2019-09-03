import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset1 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 1 Solutions</h1>

        <p>For this assignment, these will be released after class on Thursday.</p>

      {/*Code>
{`[x**2 for x in range(0, 10)] # [0, 1, 4, 9...]
[x for x in range(1, 200, 2) if x % 5 != 0] # [1, 3, 7, 9, 11...]
[[0 for col in grid[row]] for row in grid] # 2D array of 0s
[x*3 for x in [3, 90, 2]] # [9, 270, 6]`}
</Code>*/}
      </div>
    )
  }
}

export default Pset1;
