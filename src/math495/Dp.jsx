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

      <h3>Minimum Coin Change</h3>
      <p>Let's look at a problem that requires DP to solve.  Suppose, using the US coin system of penny, nickel, dime, and quarter, you need to make change for some amount with the <i>minimum amount</i> of coins.  You can do this greedily, simply take out the number of quarters, then dimes, nickels, and finally pennies.  But what if instead of the US coin system, you had a 1c coin, 3c coin and 4c coin.  What if you had to make change for 6 cents?  Taking out a 4c coin then taking 2 1c coins makes change with <b>three</b> coins - but the minimum is actually to take <b>two</b> 3c coins.  Greedy doesn't work anymore. </p>

        <h3>Approaching a DP Problem</h3>
        <p>It turns out that dynamic programming problems are <i>usually</i> a lot of thinking but not a lot of coding.  Much like recursion, you should start with the smallest case - most times you'll be asking yourself "let's say I have just ONE/TWO/THREE x, what would I do?"  Then, for the next cases that get more complicated, how would you incorporate the previous best solution (you can assume you have the previous best solution) into the current solution?  Sometimes this thinking manifests itself in "choices", like "choose x, choose y, or keep the previous best."</p>

        <p>Frankly, there is no magic bullet for becoming good at dynamic programming - or if there is, I haven't found it yet.  One way to slowly improve is to be exposed to several different types of dynamic programming problems and work through how to solve them.</p>

      <p>Almost always, there are the following elements: a base case (or set of base cases), a series of choices, and a storage array to store the solutions to subproblems.</p>

        <h3>Solving Minimum Coin Change</h3>
        <p>A classic dynamic programming problem is the minimum coins for change problem that we discussed earlier.  Given a set of coins, say of denomination 1, 3, 4, what is the minimum number of coins you need to make change for a number N?</p>

      <p>What is our base case?  Making change for N = 0.  In this case, we need 0 coins.  Now, suppose that we want to build up and solve N = 1, N = 2, N = ... until we reach the sum that we actually want to compute for.  How might we re-use our solutions to the subproblems (N for smaller amounts)?  Well, we can think of it like this: for a given N, suppose that we add an additional coin to the number of coins it takes to make change.  If we add a 1c coin, then our answer is <i>the best solution for N - 1, + that 1c coin.</i>.  If we add a 3c coin, then our answer is <i>the best solution for N - 3, + that 3c coin.</i>.  If we take the minimum of those options, then we have the minimum number of coins required to make N!  Keep iterating through our table and eventually we will build to the solution that we really want.</p>

        <p>Here's what the code could look like:</p>
        <Code>
{`def min_coins(N, coins):
    dp = [0 for i in range(N + 1)]
    dp[0] = 0 # base case
    for i in range(1, N + 1):
        min_for_sum_i = float("inf") # start off the minimum at a large number and work down
        for coin in coins:
            if i - coin >= 0:
                min_for_sum_i = min(min_for_sum_i, dp[i - coin])
        dp[i] = min_for_sum_i

    return dp[N]`}
      </Code>

        <h3>Multidimensional DP Problems</h3>
        <p>Sometimes, dynamic programming problems will have multiple variables (cost and weight, x and y, etc.), in which case you will need multiple dimensions to your storage array in order to account for the variables and how they interact with each other.</p>

        <p>One example is a modification on the previous problem: now instead of calculating the minimum number of coins to make change, let's count <i>how many ways</i> you can make change with the given coins, assuming the order of the coins doesn't matter.  For example, you can make change for 5 in 3 ways: 1 + 1 + 1 + 1 + 1, 1 + 4, 1 + 1 + 3.  How can we solve this problem using dynamic programming?</p>

        <p>Now we can't just use our same strategy because it will double count things.  We need to separate out our problem into a different way.  Suppose that we broke this up into choices: we either use a coin, or we don't use a coin.  Then we can make one dimension of our storage array into "the number of coins we've used so far" and the other dimension "what we're summing to", and by the end of the 2D array, we'll have calculated our N while also using all of the coins in our array.</p>

        <p>If we run with this idea, we then realize that our base case is when we sum to 0: in that case, we have 1 way (choose no coins).  We can use this as a base case for every row (each row representing an additional coin type being available).  The top row is then simple: if we only have one available coin, then the number of ways is the amount that this coin divides into the sum.  If our coin value is 1, for example, then there's only 1 way to make change for 1 to N.</p>

        <p>As we fill in the rest of the table, we need to consider how each next case relates to its previous ones (the "recurrence relation").  We can use our choices idea: if we don't include the current coin, then the number of ways is simply the same sum, but at the previous row (because we're not including the current coin).  If we include the current coin, then we add the number of ways we could sum to N - this coin's value, because it's as if we're taking each way to find (N - this coin), and adding this coin to it, making it a valid way for the current entry in the table.  Thus, our recurrence relation is the same column, previous row entry, plus the same row, column - this coin value, entry.  If we continue populating the table, eventually we reach our solution and solve the problem!</p>

        <p>The code could look like this:</p>

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

        <h3>Improving your DP skills</h3>
        <p>Almost every DP problem begs the questions: what is my base case, how many variables am I working with (dimensions), and what are my choices at each stage?  If you can answer these questions, you can usually solve the problem.</p>

      </div>

    )
  }
}

export default Dp;
