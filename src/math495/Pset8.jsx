import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset8 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 8 Solutions</h1>

        <h3>The Coin Change Problem</h3>
<Code>
  {`def getWays(n, c):
    dp = [[0 for j in range(n + 1)] for i in range(len(c))]
    for r in range(len(dp)):
        dp[r][0] = 1

    for r in range(len(dp)):
        for col in range(1, len(dp[r])):
            withCoin = dp[r][col - c[r - 1]] if col - c[r - 1] >= 0 else 0
            withoutCoin = dp[r - 1][col] if r - 1 >= 0 else 0
            dp[r][col] = withCoin + withoutCoin
    return dp[len(c) - 1][n]`}
</Code>
        <h3>Maximum Subarray</h3>
<Code>
{`def maxSubarray(arr):
    max_subarray = [arr[i] for i in range(len(arr))]
    max_subsequence = 0
    for i in range(len(arr)):
        max_subsequence = max(max_subsequence, max_subsequence + arr[i])
        max_subarray[i] = max(max_subarray[i], (max_subarray[i - 1] if i - 1 >= 0 else 0) + arr[i])
    max_subsequence = max_subsequence if max(arr) >= 0 else max(arr)
    return (max(max_subarray), max_subsequence)`}
</Code>

        <h3>Fibbonaci Modified</h3>
<Code>
{`def fibonacciModified(t1, t2, n):
    for i in range(n - 2):
        t2, t1 = t1 + t2**2, t2
    return t2`}
</Code>
        <h3>Stock Maximize</h3>
        <p>You might have wondered why this is a Dynamic Programming problem: it's that the subproblems are the periods of time which you buy the stock, and then finally sell it at the peak.  Then you can recurse on the next "subproblem".</p>
<Code>
{`def stockmax(prices):
    if len(prices) == 0:
        return 0
    max_val = -1
    ix = -1
    for i in range(len(prices)):
        # Find the highest price to sell at and assume buying at each one before that
        if prices[i] > max_val:
            max_val = prices[i]
            ix = i
    return ix * max_val + stockmax(prices[ix + 1:]) - sum(prices[0:ix])`}
</Code>

        <h3>Lego Blocks</h3>
        <h3>Knapsack</h3>
        <Code>
{`def unboundedKnapsack(k, arr):
    dp = [[0 for j in range(k + 1)] for i in range(len(arr))]
    for i in range(k + 1):
        dp[0][i] = i - (i % arr[0])

    for i in range(1, len(arr)):
        for j in range(k + 1):
            if j - arr[i] < 0:
                dp[i][j] = dp[i - 1][j]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - arr[i]] + arr[i])
    return dp[len(arr) - 1][k]`}
        </Code>

        <h3>Bricks Game</h3>
        <Code>
{`def bricksGame(arr):
    arr.reverse()
    dp = [0 for _ in range(len(arr))]
    dp[0] = arr[0]
    dp[1] = arr[0] + arr[1]
    dp[2] = arr[0] + arr[1] + arr[2]

    runSum = dp[2]
    for i in range(3, len(dp)):
        runSum += arr[i]
        dp[i] = runSum - min(dp[i - 3:i])

    return dp[-1]`}
        </Code>
      </div>
    )
  }
}

export default Pset8;
