import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset7 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 6 Solutions</h1>

        <h3>Breadth first search: Shortest Reach</h3>
        <p>Don't forget to map the edges BOTH ways since the graph is undirected!</p>
<Code>
  {`def bfs(n, m, edges, s):
    new_edges = {}
    # Initialize empty list for each node
    for i in range (1, n + 1):
        new_edges[i] = []

    for edge in edges:
        new_edges[edge[0]].append(edge[1])
        new_edges[edge[1]].append(edge[0])
    edges = new_edges


    q = deque([s])
    visited = set()
    visited.add(s)
    dists = { i: -1 for i in range(1, n + 1)}
    dists[s] = 0

    while q:
        node = q.popleft()

        for to in edges[node]:
            if to not in visited:
                dists[to] = dists[node] + 6
                q.append(to)
                visited.add(to)

    ret = []
    for i in range(1, n + 1):
        if i != s:
            ret.append(dists[i])

    return ret`}
</Code>
        <h3>Red Knight's Shortest Path</h3>
      <p>This problem can be solved using BFS.  Tracing the path seems tricky but if you put the moves into the queue, you can recover it when you reach the target destination of the night.  Encoding the moves is easiest if you use an array to keep track of the move relative to the current row and column.</p>

<Code>
{`def printShortestPath(n, i_start, j_start, i_end, j_end):
    # UL, UR, R, LR, LL, L
    q = deque([(i_start, j_start, ())])
    visited = set([(i_start, j_start)])
    while q:
        r, c, moves = q.popleft()
        if r == i_end and c == j_end:
            print(len(moves))
            print(*moves)
            return

        neighbors = [(r - 2, c - 1, "UL"), (r - 2, c + 1, "UR"), (r, c + 2, "R"), (r + 2, c + 1, "LR"), (r + 2, c - 1, "LL"), (r, c - 2, "L")]
        for neighbor in neighbors:
            next_r = neighbor[0]
            next_c = neighbor[1]
            if n > next_r >= 0 and n > next_c >= 0 and (next_r, next_c) not in visited:
                visited.add((next_r, next_c))
                q.append((next_r, next_c, moves + (neighbor[2], )))
    print("Impossible")`}
</Code>

        <h3>Saving Travel Time</h3>
        <p>Since the edges in this problem are weighted, find the shortest path using Dijkstra's Algorithm.</p>
<Code>
{`from heapq import heappop, heappush


N, M = [int(x) for x in input().split(" ")]
P = []
for i in range(M):
    P.append([int(x) for x in input().split(" ")])
S, E = [int(x) for x in input().split(" ")]

def solution(n, s, e, paths):
    oo = float("inf")
    dists = [oo for i in range(n)]
    D = [[oo if i != j else 0 for i in range(n)] for j in range(n)]

    for path in paths:
        f, t, distance = path
        D[f][t] = distance
        D[t][f] = distance

    q = [(0, s)]
    dists[s] = 0
    while q:
        _, node = heappop(q)

        if node == e:
            return dists[e]

        for i in range(len(D[node])):
            if D[node][i] != oo and D[node][i] + dists[node] < dists[i]:
                dists[i] = D[node][i] + dists[node]
                heappush(q, (dists[i], i))
    return -1

print(solution(N, S, E, P))`}
</Code>
        <h3>Roads and Libraries</h3>
        <p>The key insight for this problem is that if the cost of building a library is less or equal to the cost of building a road, you might as well just build libraries at every node, therefore it's cost of a library multiplied by the number of cities.  If not, then a flood fill to find the number of edges and simple multiplication will solve the problem.</p>
<Code>
{`def dfs(start_city, G, visited):
    total = 1
    if start_city in G:
        for neighbor in G[start_city]:
            if neighbor not in visited:
                visited.add(neighbor)
                total += dfs(neighbor, G, visited)
    return total

# Complete the roadsAndLibraries function below.
def roadsAndLibraries(n, c_lib, c_road, cities):
    if c_lib <= c_road:
        # If there's no reason to build roads while we can just build libraries
        # then just build libraries at every city
        return n * c_lib
    else:
        # Create the graph
        G = {}
        total_cost = 0
        for i in range(len(cities)):
            if cities[i][0] not in G:
                G[cities[i][0]] = set()
            if cities[i][1] not in G:
                G[cities[i][1]] = set()
            G[cities[i][0]].add(cities[i][1])
            G[cities[i][1]].add(cities[i][0])

        # Use flood fill
        visited = set()
        for i in range(1, n + 1):
            if i not in visited:
                if i not in G:
                    total_cost += c_lib
                else:
                    visited.add(i)
                    n_region = dfs(i, G, visited)
                    # for p cities that are connected, there are p - 1
                    # roads that connect them, plus 1 library
                    total_cost += (n_region - 1) * c_road + c_lib
        return total_cost`}
</Code>
      </div>
    )
  }
}

export default Pset7;
