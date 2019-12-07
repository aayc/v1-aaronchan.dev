import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset9 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 9 Solutions</h1>

        <h3>Weighted Uniform Strings</h3>
<Code>
  {`def to_weight(c):
    return ord(c) - 96

def weightedUniformStrings(s, queries):
    weights = set([to_weight(s[0])])
    acc_weight = to_weight(s[0])
    for i in range(1, len(s)):
        acc_weight = (acc_weight if s[i] == s[i - 1] else 0 ) + to_weight(s[i])
        weights.add(acc_weight)

    return ["Yes" if q in weights else "No" for q in queries]`}
</Code>
        <h3>Dice Sums</h3>
        <p>I think the problem statement was meant to say "expected value" instead of "highest chances" because this one was solved by taking the average.</p>
<Code>
{`N = [int(x) for x in input().split(" ")]
M = [int(x) for x in input().split(" ")]
N_a = sum(N) / len(N)
M_a = sum(M) / len(M)
if N_a == M_a:
    print("Tie")
elif N_a > M_a:
    print("Gunnar")
else:
    print("Emma")`}
</Code>

        <h3>Buy Two Get One</h3>
<Code>
{`import sys

L= [x.strip() for x in sys.stdin.readlines()]
lines = [int(x) for x in L[1:]]
lines = sorted(lines, reverse = True)
price = 0
for i in range(len(lines)):
    if (i + 1) % 3 == 0:
        continue
    price += lines[i]
print(price)`}
</Code>
        <h3>Glitch Bot</h3>
        <p>The most straightforward way to do this problem is actually to brute force it (i.e., change each instruction and check the result to see if it's the goal.)</p>
<Code>
{`import sys

def execute(ins):
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    d = 0
    x = 0
    y = 0

    for move in ins:
        if move == "Forward":
            x += directions[d][0]
            y += directions[d][1]
        elif move == "Left":
            d -= 1
            if d < 0:
                d = 3
        elif move == "Right":
            d += 1
            d = d % len(directions)
    return (x, y)



L = sys.stdin.readlines()
X, Y = [int(x) for x in L[0].split(" ")]
instructions = [l.strip() for l in L[2:]]
types = ["Left", "Forward", "Right"]
for i in range(len(instructions)):
    original = instructions[i]
    is_wrong = False
    for t in types:
        if original != t:
            instructions[i] = t
            result = execute(instructions)
            if (X, Y) == result:
                print(i + 1, t)
                is_wrong = True
                break
    instructions[i] = original
    if is_wrong:
        break`}
</Code>

        <h3>Spies</h3>
        <p>If you solved this using the distance and then sorting, make sure that you account for if the spies' radii are so large that you actually can't extend any signal, therefore the answer is 0 in that case.  I solved it using binary search, which covers this case by default.</p>
        <Code>
{`import math

cx, cy, N = [int(x) for x in input().split(" ")]
# do a binary search
L = []
for i in range(N):
    x, y, r = [int(x) for x in input().split(" ")]
    L.append((x, y, r))

def dist(a, b, c, d):
    return math.sqrt((a - c)**2 + (b - d)**2)

high = 1000000
low = 0
while True:
    too_big = False
    R = (high + low) / 2
    detection = 0
    for x, y, r in L:
        if dist(cx, cy, x, y) < r + R:
            detection += 1
        if detection == 3:
            too_big = True
            break

    if too_big:
        high = R
    else:
        low = R

    if abs(R - ((high + low) / 2)) < 1e-5:
        break

print(int((high + low) / 2))`}
</Code>

        <h3>Snakes and Ladders: Quickest Way Up</h3>
        <p>My solution isn't optimally succinct but it is easy to follow: create the graph by linking each square to the 6 in front of it (accounting for snakes and ladders), then conduct BFS to find shortest path from 1 to 100.</p>
        <Code>
{`from heapq import heappush
from heapq import heappop

oo = float("inf")
BOARD_SIZE = 100
def quickestWayUp(ladders, snakes):
    adj = [[oo for j in range(BOARD_SIZE)] for i in range(BOARD_SIZE)]
    ladder_map = { a[0] - 1: a[1] for a in ladders }
    snake_map = { a[0] - 1: a[1] for a in snakes }
    for i in range(len(ladders)):
        adj[ladders[i][0] - 1][ladders[i][1] - 1] = 0

    for i in range(len(snakes)):
        adj[snakes[i][0] - 1][snakes[i][1] - 1] = 0

    # create the map where each square, if not in ladders or snakes, is mapped to the next 6 squares.
    for i in range(BOARD_SIZE - 1):
        if i in ladder_map or i in snake_map:
            continue

        for j in range(i + 1, min(i + 7, BOARD_SIZE)):
            adj[i][j] = 1

    dists = [oo for i in range(BOARD_SIZE)]
    dists[0] = 0

    q = [(0,0)]
    while q:
        cost, p = heappop(q)
        if p == BOARD_SIZE - 1:
            break
        for i in range(BOARD_SIZE):
            if adj[p][i] != oo:
                if dists[p] + adj[p][i] < dists[i]:
                    #print("set dists",i,"to ", dists[p] + adj[p][i])
                    dists[i] = dists[p] + adj[p][i]
                    heappush(q, (dists[i], i))
    return -1 if dists[BOARD_SIZE - 1] == oo else dists[BOARD_SIZE - 1]`}
        </Code>
      </div>
    )
  }
}

export default Pset9;
