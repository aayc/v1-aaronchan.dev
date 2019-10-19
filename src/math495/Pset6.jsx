import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset6 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 6 Solutions</h1>

        <h3>Recursive Digit Sum</h3>
        <p>Notice that the constraints indicate HUGE numbers, and K can be 100,000!  The first number will clearly dominate the complexity (it's a sum across 10^5 by 10,000 digits), so shortcutting it by simply multiplying the sum of n with k will save a lot of time and allow you to pass the larger test cases.</p>
<Code>
  {`def superDigit(n, k):
    start_sum = sum([int(x) for x in n]) * k
    return do_superDigit(start_sum)

def do_superDigit(n):
    if n < 10:
        return n

    return do_superDigit(sum([int(x) for x in str(n)]))`}
</Code>
        <h3>Powersum</h3>
        <p>As we covered in class, make sure you get your base cases right and are properly terminating execution when the candidate sum is too big.  I solved it by moving down from X, but you could also solve it by building from 0 to X.</p>
<Code>
{`def powerSum(X, N, start = 1):
    if X == 0:
        return 1
    ret = 0
    for i in range(start, int(math.sqrt(X) + 1) + 2):
        n = X - i**N
        if n >= 0:
            sols = powerSum(X - i**N, N, i + 1)
            ret += sols
    return ret`}
</Code>
        <h3>Crossword Puzzle</h3>
        <p>This one is tedious - it helps to make some assistant functions that scan for open spots.  Make sure that you follow the set, recurse, unset pattern when placing the words in the slots.</p>
<Code>
{`def fits_crossword(truth, candidate):
    if len(truth) != len(candidate):
        return False

    for i in range(len(truth)):
        if truth[i] != candidate[i] and truth[i] != "-":
            return False
    return True

# from some position r, c, explore left and right for blanks and letters
def get_horizontal_length(crossword, start_r, start_c, not_blank):
    i = start_c
    while i >= 0 and crossword[start_r][i] != not_blank:
        i -= 1
    i += 1

    j = start_c
    while j < len(crossword[start_r]) and crossword[start_r][j] != not_blank:
        j += 1

    return (i, j)

# from some position r, c, explore up and down for blanks and letters
def get_vertical_length(crossword, start_r, start_c, not_blank):
    i = start_r
    while i >= 0 and crossword[i][start_c] != not_blank:
        i -= 1
    i += 1

    j = start_r
    while j < len(crossword) and crossword[j][start_c] != not_blank:
        j += 1

    return (i, j)

# returns the completed crossword array OR none if there is no solution
def crosswordPuzzle(crossword, words):
    # unfortunately the problem setter didn't make the "not blank"
    # character consistent (sometimes it's +, sometimes X, etc.),
    # so we need to figure out what it is and pass it in.
    # we will find it by removing "-" from the character list and check other char.
    types_of_characters_in_crossword = set([crossword[i][j] for i in range(10) for j in range(10)])
    types_of_characters_in_crossword.remove("-")
    not_blank_char = list(types_of_characters_in_crossword)[0]

    # turn the crossword puzzle into a mutable matrix
    crossword = [list(l) for l in crossword]
    # get a set of the words to fill in
    words = set([w.strip() for w in words.split(";")])
    if do_crosswordPuzzle(crossword, words, 0, 0, not_blank_char):
        return crossword
    else:
        return None

# Overall time complexity: worse than O(n^2)
def do_crosswordPuzzle(crossword, words, r, c, not_blank):
    if r == len(crossword):
        # Base case: successfully filled everything
        return True

    # prepare our next move
    nr = r + 1 if c == len(crossword[0]) - 1 else r
    nc = c + 1 if c != len(crossword[0]) - 1 else 0

    if crossword[r][c] == "-":
        # we have a blank, so try filling something in
        if (c > 0 and crossword[r][c - 1] == "-")  or (c < len(crossword) - 1 and crossword[r][c + 1] == "-"):
            # we are working with a horizontal word
            left, right = get_horizontal_length(crossword, r, c, not_blank)
            place = crossword[r][left:right]

            for word in words:
                if fits_crossword(place, word):
                    # SET
                    crossword[r][left:right] = list(word)
                    words.remove(word)

                    # RECURSE
                    if do_crosswordPuzzle(crossword, words, nr, nc, not_blank):
                        return True

                    # UNSET
                    crossword[r][left:right] = place
                    words.add(word)
        else:
            # we are working with a vertical word
            top, bottom = get_vertical_length(crossword, r, c, not_blank)
            place = [crossword[i][c] for i in range(top, bottom)]

            for word in words:
                if fits_crossword(place, word):
                    # SET
                    for i in range(top, bottom):
                        crossword[i][c] = word[i - top]
                    words.remove(word)

                    if do_crosswordPuzzle(crossword, words, nr, nc, not_blank):
                        return True

                    # UNSET
                    for i in range(top, bottom):
                        crossword[i][c] = place[i - top]
                    words.add(word)
        # neither of these worked, so it's not possible from this state.
        return False
    else:
        # This cell is not a blank, so move onward.
        return do_crosswordPuzzle(crossword, words, nr, nc, not_blank)`}
</Code>
      </div>
    )
  }
}

export default Pset6;
