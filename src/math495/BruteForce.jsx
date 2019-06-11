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

      <p>Brute force will always give you the right answer and is usually fast to implement.  The problem, of course, is that it is slow.  If the problem can be solved within the time constraints using brute force, do it.  It usually means generating all possible solutions and testing each one.  You can usually tell if the problem requires brute force if a) the constraints are really small, b) solutions and problem space are not well connected, or c) clever solutions would be extremely complex.</p>

      <SimpleQuoteBox>
      <h3>Square Equations</h3>
      <p>How many distinct values of a,b,c,d solve a^2 + b^2 = c^2 + d^2 for a,b,c,d in range 1 to 1000?</p>
      </SimpleQuoteBox>

      <SimpleQuoteBox>
      <h3>Sherlock and Anagrams</h3>
      <p>Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.</p>
      <p>For example s = mom, the list of all anagrammatic pairs is [m, m], [mo, om] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.</p>
      </SimpleQuoteBox>


      <p>Magic squares</p>

      <h3>Using Recursion</h3>
      <p>generate all permutations</p>

      <h3>Backtracking with Pruning</h3>
      <p>Sometimes you can make your brute force a lot more efficient by using the constraints of the problem.  Your algorithm builds the solution step by step until the current solution is no longer possible, then it reverses its most recent step and tries a different move.  Some puzzle-like problems, such as Sudoku, can be effectively solved this way.</p>
      <p>Suppose you are given part of a 9x9 Sudoku puzzle and your algorithm solves the rest of it.  Every backtracking problem has this sort of pattern:</p>
      <Code>
{`def solve (grid, r, c): # r and c is the current slot we're trying to fill
  next_r, next_c = calculate_next_position(r, c)
  for i in range(1, 10): # try 1-9
    if is_valid(grid, r, c, i): # check if we can put i here
      grid[r][c] = i # "set" the possibility.
      grid = solve(grid, next_r, next_c) # allow the recursive call to try everything from here
      if is_solved(grid):
        return grid # if found a viable solution, we're done
      grid[r][c] = "X" # "unset" the possibility; not necessary for this problem but it's a good practice
  return grid # not the most efficient but it'll do`}
      </Code>

      <p> sherlock and string subsets</p>

      </div>
    )
  }
}

export default BruteForce
