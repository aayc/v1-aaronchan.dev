import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset5 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 5 Solutions</h1>

        <h3>Priyanka and Toys</h3>
<Code>
  {`def toys(w):
    w = sorted(w)

    min_w = w[0]
    containers = 0
    for item in w:
        if item > min_w + 4:
            min_w = item
            containers += 1
    return containers + 1 # account for last container`}
</Code>
        <h3>Marc's Cakewalk</h3>
<Code>
{`def marcsCakewalk(calorie):
    # sort calorie counts in descending order, then multiply.
    # Greedy heuristic guarantees minimum value
    calorie = sorted(calorie, reverse = True)
    return sum([2**j * calorie[j] for j in range(len(calorie))])`}
</Code>
        <h3>Greedy Florist</h3>
<Code>
{`def getMinimumCost(k, c):
    # purchase all the flowers
    flowers = sorted(c, reverse = True)
    bought = 0
    paid = 0
    while len(flowers) > 0:
        paid += flowers.pop(0) * (bought // k + 1)
        bought += 1
    return paid`}
</Code>
        <h3>Max Min</h3>
<Code>
  {`def maxMin(k, arr):
    arr = sorted(arr)
    min_unfairness = float("inf")
    for i in range(len(arr) - k + 1):
        min_unfairness = min(min_unfairness, arr[i + k - 1] - arr[i])
    return min_unfairness`}
</Code>
      </div>
    )
  }
}

export default Pset5;
