import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class BruteForce extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Brute Force</h1>

        <p>Brute force is an excellent way to start thinking about a problem.  In general, a brute force solution is one that iterates through potentially all possible solutions or scenarios, evaluates them according to some criteria, and then returns the best one.  If you see that the input is constrained to be very small, it's typically a tip-off of a brute force problem.</p>

        <p>Here's an example:</p>
        <SimpleQuoteBox>
         <b>Minimum Loss</b>
          <p>Given an array such as [20, 15, 8, 2, 12], find the minimum positive difference between two elements that are in order, left to right.  In this case, it would be 3 (15 - 12 at indices 1, 4). The number of elements in the array will always be less than 1000.</p>
        </SimpleQuoteBox>

        <p>There are more efficient ways to do this problem, but with less than 1000 elements, brute force is probably the fastest way to code up a solution.  To solve it using brute force, we'll just try everything:</p>

<Code>
{`A = [20, 15, 8, 2, 12] # or whatever the input is
min_loss = float("inf") # set to a huge number to initialize
for i in range(len(A)):
    for j in range(i + 1, len(A)):
        difference = A[j] - A[i]
        if difference > 0 and difference < min_loss:
            # We're only looking for positive differences
            min_loss = difference
return min_loss`}
</Code>
        <p>Notice that this code examines every possible pairing, and checks it by the criteria of being the minimum loss found so far.</p>

        <p>Another example you may be familiar with is the Two Characters problem from the Strings problem set:</p>
        <SimpleQuoteBox>
          <b>Two Characters</b>
          <p>Given a string, remove characters until it is made up of any two alternating characters.  When you choose a character to remove, all instances of that character are removed.  Create the longest string possible that contains just two alternating letters.  The maximum length of the string you are given will be 1000.</p>
        </SimpleQuoteBox>
        <p>The easiest way to do this is to pick two characters of the alphabet, remove everything else from the string, and check its length.  Then try a different two characters.  There are 26*26 pairs to try, and with a max length of 1000, your algorithm will be fast enough.</p>
        <Code>
{`def it_alternates(s):
    # It doesn't alternate if two characters next to each other are the same
    for k in range(1, len(s)):
        if s[k] == s[k - 1]:
            return False
    return True

def alternate(s):
    lower = string.ascii_lowercase
    N = 0
    for i in range(len(lower)):
        for j in range(i + 1, len(lower)):
            # c1, c2 make up every pairing in the alphabet.
            c1 = lower[i]
            c2 = lower[j]

            # remove everything else
            filtered_string = [c for c in s if c == c1 or c == c2]

            # Check if filtered_string alternates:
            if it_alternates(filtered_string):
                N = max(N, len(filtered_string))

    return N if N != 1 else 0`}
        </Code>



      <h2>Brute Force with Recursion</h2>
        <p>Recursion is a fundamental idea in Computer Science.  The most important thing to remember when implementing a recursive algorithm is to know what your <b>base case</b> is.  I usually put it first in my function.  Recursion is useful because sometimes we need to check all possible situations, and recursion is an elegant mechanism to let us generate those situations.  For example, consider this problem:</p>

        <SimpleQuoteBox>
          <b>Password Crack</b>
          <p>You're trying to guess John's weak password which is only 4 characters long, and he's even told you it's either lower case alphabetical or digits.  He's given you a function check_password that you can run to see if your guess matches.  Guess his password in under 5 seconds!</p>
        </SimpleQuoteBox>

        <p>In this problem we need to literally try every possible combination of ascii characters and digits.  The easiest and simplest implementation is recursive: try one letter or digit, and recurse until length of our guess is 4, then call check_password on it.</p>

        <Code>
{`def password_crack(s):
if len(s) == 4:
    # This is our base case!  Using base cases is how you avoid infinite loops!
    check_password(s)
else:
    for c in string.ascii_lowercase:
        password_crack(s + c)
    for d in string.digits:
        password_crack(s + d)`}
</Code>

        <p>What is our base case?  Our base case how we END our recursive function; in this example, it's when we generate a password to test.  Notice that each call to password_crack explodes in complexity because it leads to 26 (letters) + 10 (digits) extra calls!  So our function is really slow, but for a simple four letter password, brute forcing is sufficient.</p>

        <p>Also remember that strings are <b>immutable</b> which is why we can pass them through the function and modify them without worrying about stepping on our own toes by modifying something unexpectedly.</p>

        <h2>Backtracking</h2>
        <p>An advanced method of brute force is called backtracking.  Backtracking is where you need to try everything, but you have certain constraints that will ensure that your complexity doesn't explode out of control.  For example, let's look at the following problem.</p>


        <SimpleQuoteBox>
          <b>Solving Sudoku Puzzles</b>
          <p>Timmy is tired of solving Sudoku puzzles by hand.  A Sudoku puzzle is a grid of squares (in this case, 9x9) where Timmy must fill out each square with a number 1-9 such that every row has the numbers 1-9, every column has the numbers 1-9, and each 3x3 square in the 9x9 board has the numbers 1-9.  He has a bunch of 9x9 sudoku puzzles with a few numbers filled out, each, and he wants to write a program that takes in this incomplete puzzle and outputs a completed one.</p>
        </SimpleQuoteBox>

        <p>Coming up with an algorithm that intelligently decides the solution is difficult, so instead we will use brute force.  The basic idea is: place a number 1-9 in the first unfilled spot and see if the board becomes invalid (i.e., doesn't meet the sudoku conditions); if it is valid, try the next unfilled spot.  If none of the numbers work, backtrack and try a different number in the previous spot.  This can be done fairly neatly using recursion, and this kind of algorithm is known as a <b>backtracking</b> algorithm.  These are very useful when you have constraints and you want to try every solution.</p>

        <p>Note that backtracking seems terribly cost ineffective, but it turns out that because we "backtrack", we actually save ourselves a lot of time in comparison to randomly filling boards and testing them.  Also note that in brute force recursive solutions, there is <i>usually</i> an element of "setting, recursing, unsetting."  This is the mechanism by which we look at every possible solution.</p>

        <Code>
{`def can_place(board, r, c, digit):
    if digit in board[r] or digit in [board[i][c] for i in range(len(board))]:
        # digit is in a row or column, so nope

        return False

    # Check the 9 squares in the zone of (r, c)
    r_zone = [(r // 3) * 3, (r // 3) * 3 + 1, (r // 3) * 3 + 2]
    c_zone = [(c // 3) * 3, (c // 3) * 3 + 1, (c // 3) * 3 + 2]
    for nr in r_zone:
        for nc in c_zone:
            if board[nr][nc] == digit:
                # there's a conflict, so return false
                return False

    return True

def solve_sudoku(board, r, c):
    if r == len(board):
        # This is our base case!
        # If we've reached the end, that means we have found a solution
        for p in board:
            print(*p)
        return 1

    # calculate next position
    next_r = r + 1 if c == len(board[0]) - 1 else r
    next_c = 0 if c == len(board[0]) - 1 else c + 1

    if board[r][c] == -1:
        solutions = 0
        for k in range(1, 10):
            if can_place(board, r, c, k):
                # SET THE SPOT
                board[r][c] = k

                # RECURSE TO THE NEXT SPOT
                solutions += solve_sudoku(board, next_r, next_c)

                # UNSET THE SPOT (very important)
                board[r][c] = -1
        return solutions
    else:
        return solve_sudoku(board, next_r, next_c)

def sudoku_solver(board):
    return solve_sudoku(board, 0, 0)`}
        </Code>

        <p>This backtracking algorithm solves sudoku puzzles by recursively searching for solutions, and backpedaling when the board is no longer valid.</p>

        <p>If you're curious, this is some sample input:</p>
  <Code>
        {` test_board = [[-1, -1, -1, 6, 5, -1, -1, -1, 1],
                  [-1, -1, -1, 4, -1, 8, -1, -1, 6],
                  [-1, 3, -1, -1, -1, 7, -1, 8, -1],
                  [9, -1, -1, -1, -1, 1, -1, -1, 3],
                  [-1, 6, -1, -1, 4, -1, -1, 7, -1],
                  [1, -1, -1, 8, -1, -1, -1, -1, 4],
                  [-1, 5, -1, 1, -1, -1, -1, 9, -1],
                  [8, -1, -1, 3, -1, 2, -1, -1, -1],
                  [6, -1, -1, -1, 9, 5, -1, -1, -1]];

    test_board2 = [[-1, 8, -1, -1, -1, -1, 2, -1, -1],
                   [-1, -1, -1, -1, 8, 4, -1, 9, -1],
                   [-1, -1, 6, 3, 2, -1, -1, 1, -1],
                   [-1, 9, 7, -1, -1, -1, -1, 8, -1],
                   [8, -1, -1, 9, -1, 3, -1, -1, 2],
                   [-1, 1, -1, -1, -1, -1, 9, 5, -1],
                   [-1, 7, -1, -1, 4, 5, 8, -1, -1],
                   [-1, 3, -1, 7, 1, -1, -1, -1, -1],
                   [-1, -1, 8, -1, -1, -1, -1, 4, -1]]
    print(sudoku_solver(test_board))
    print(sudoku_solver(test_board2))`}
        </Code>

        <p>And output:</p>
        <Code>
{`7 2 8 6 5 9 3 4 1
5 1 9 4 3 8 7 2 6
4 3 6 2 1 7 5 8 9
9 8 4 5 7 1 2 6 3
2 6 5 9 4 3 1 7 8
1 7 3 8 2 6 9 5 4
3 5 2 1 8 4 6 9 7
8 9 7 3 6 2 4 1 5
6 4 1 7 9 5 8 3 2
1
7 8 4 1 9 6 2 3 5
3 2 1 5 8 4 6 9 7
9 5 6 3 2 7 4 1 8
2 9 7 4 5 1 3 8 6
8 4 5 9 6 3 1 7 2
6 1 3 8 7 2 9 5 4
1 7 9 6 4 5 8 2 3
4 3 2 7 1 8 5 6 9
5 6 8 2 3 9 7 4 1
1`}
        </Code>

        <p>Remember that backtracking can only be used if you have certain constraints that you can leverage to reduce the number of situations you need to consider.  Also remember that when implementing a backtracking algorithm, you need a base case and a set-recurse-unset pattern.</p>
       
      </div>
    )
  }
}

export default BruteForce
