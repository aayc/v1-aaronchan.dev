import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset4 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 4 Solutions</h1>

        <h3>Happy Ladybugs</h3>
        <p>If there is at least one space, it means all the ladybugs can be moved to whatever position.  If there are no spaces, you must check to see if the existing configuration of ladybugs is happy or not.</p>
<Code>
  {`def happyLadybugs(b):
    freq = Counter(b)
    for k, v in freq.items():
        print(k, v)
        if k != "_" and v == 1:
            return "NO"

    isHappy = True
    for i in range(len(b)):
        if not ((i > 0 and b[i - 1] == b[i]) or (i + 1 < len(b) and b[i + 1] == b[i])):
            isHappy = False
            break

    if "_" in freq:
        return "YES"
    else:
        return "NO" if not isHappy else "YES"`}
</Code>
        <h3>Validating Credit Card Numbers</h3>
        <p>This one requires you to be very systematic.  Knowing list comprehensions can help you reduce code bloat.</p>
<Code>
{`import string

def verify(s):
    if s[0] not in ["4", "5", "6"]:
        #print("Fail at start")
        return "Invalid"

    if len(s.replace("-", "")) != 16:
        #print("Fail at length")
        return "Invalid"

    if any([len(m) != 4 for m in s.split("-")]) and "-" in s:
        #print("Fail at hyphen groups")
        return "Invalid"

    if any([c not in ["-"] + list(string.digits) for c in s]):
        #print("Fail at valid chars")
        return "Invalid"

    no_hyphens = s.replace("-", "")
    if any([all([c == m[0] for c in m]) for m in \
        [no_hyphens[r - 4:r] for r in range(4, len(no_hyphens))]]):
        #print("Fail at consec")
        return "Invalid"

    return "Valid"

T = int(input())
for i in range(T):
    s = input()
    print(verify(s))`}
</Code>
        <h3>Climbing the Leaderboard</h3>
<Code>
{`def climbingLeaderboard(scores, alice):
    alice.reverse()
    res = []
    j = 0
    rank = 1
    last_num = scores[j]
    for a in alice:
        if a >= last_num:
            res.append(rank)
            continue

        set_rank = False
        while j + 1 < len(scores):
            j += 1
            if scores[j] < last_num:
                rank += 1

            last_num = scores[j]

            if a >= scores[j]:
                res.append(rank)
                set_rank = True
                break

        if not set_rank:
            res.append(rank + 1)

    res.reverse()
    return res`}
</Code>
        <h3>Almost Sorted</h3>
<Code>
  {`def almostSorted(arr):
    # Idea: find out-of-place element from left to right
    # then find out-of-place element from right to left
    # try a swap, if it works then great
    # otherwise try a reverse on this subsegment, if it works then great
    # otherwise impossible

    # check to see if any elements can be swapped
    e_i = next((i for i in range(1, len(arr)) if arr[i] < arr[i - 1]), None) - 1
    if e_i is None:
        # array is already sorted
        print("yes")
        return

    e_j = next((i for i in range(len(arr) - 2, -1, -1) if arr[i] > arr[i + 1]), None) + 1

    # try swapping them
    arr[e_i], arr[e_j] = arr[e_j], arr[e_i]
    if next((i for i in range(1, len(arr)) if arr[i] < arr[i - 1]), None) is None:
        print("yes")
        print(f"swap {e_i + 1} {e_j + 1}")
        return
    else:
        # Swap back
        arr[e_i], arr[e_j] = arr[e_j], arr[e_i]

        # try reversing the subsegment
        R = arr[:e_i] + arr[e_i:e_j + 1][::-1] + arr[e_j + 1:]
        if next((i for i in range(1, len(R)) if R[i] < R[i - 1]), None) is None:
            print("yes")
            print(f"reverse {e_i + 1} {e_j + 1}")
            return
        else:
            print("no")
            return`}
</Code>
        <h3>Ema's Supercomputer</h3>
        <p>This one is kind of a pain because it asks not for the largest and second largest pluses, but instead the maximum product of the pluses, which could be two smaller but more balanced pluses.  In addition, the pluses cannot overlap.  The solution is to iterate through the board and when a plus is found, blocking it out and re-running the function.  As pluses in pairs are found, keep track of the maximum product area.  Don't forget to check smaller versions of pluses at each spot in the grid.</p>
<Code>
  {`def twoPluses(grid, first = True):
    grid = [list(s) for s in grid]
    nr = len(grid)
    nc = len(grid[0])
    max_plus_len = min(nr, nc)
    max_area = 0
    areas = []

    for r in range(len(grid)):
        for c in range(len(grid[r])):
            # Try each plus length from the max, downward
            for l in range(max_plus_len, 0, -1):
                works, new_grid = fit_plus(r, c, grid, l)
                area = (l - 1) * 4 + 1
                if works and first:
                    # If first time, then multiply this area against a second search
                    max_area = max(max_area, area * twoPluses(new_grid, first = False))
                elif works and not first:
                    # If second time, just return the pure area
                    max_area = max(max_area, area)

    return max_area


def fit_plus (r, c, grid, L):
    grid = [row[:] for row in grid] #deepcopy
    if 0 <= r - (L - 1) < len(grid) and \
        0 <= c - (L - 1) < len(grid[0]) and \
        0 <= r + (L - 1) < len(grid) and \
        0 <= c + (L - 1) < len(grid[0]):

        # ensure that all squares are G
        for next_r in range(r - (L - 1), r + L):
            if grid[next_r][c] == 'B':
                return False, grid

        for next_c in range(c - (L - 1), c + L):
            if grid[r][next_c] == 'B':
                return False, grid

        # set all squares to B to avoid overlap
        for next_r in range(r - (L - 1), r + L):
            grid[next_r][c] = 'B'
        for next_c in range(c - (L - 1), c + L):
            grid[r][next_c] = 'B'

        # return new grid to execute over.
        return True, grid
    else:
        return False, grid`}
</Code>
      </div>
    )
  }
}

export default Pset4;
