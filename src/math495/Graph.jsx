import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Graph extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Graph based Algorithms</h1>

        <p>Graphs are used to model relationships between objects/things.  The objects are called nodes/vertices and the relationships are called edges.  For example, you could model a set of buildings and their relationship by distance, so you would have a set of nodes that represent each building, and an edge from node A to node B would have some value, like, which would represent distance, like 5 miles.  Another example of a graph would be a social network, with nodes as people and edges as relationship type.</p>

        <p>Knowing how to represent, traverse and compute based on graphs is essential.  There are two main ways to represent a graph: an <b>adjacency matrix</b> or an <b>adjacency list</b>. An adjacency matrix is a 2D array (let's call it "adj") where adj[i][j] represents the relationship from node i to node j.  For example, if there are 10 nodes, then adj will be 10 by 10.  An adjacency list is usually implemented as a class, like a Node class, where each Node has a list or set of children.  Generally, adjacency matrices are considered more useful for dense graphs where there are a lot of connections between nodes, and adjacency lists are better for sparse graphs, where there are only a few connections and many nodes.</p>

        <p>Suppose that you get as input, M as the number of nodes on the first line, then each following line is "a b" such that node "a" is connected to node "b".  The input would look like this:</p>
<Code>
{`4
0 1
1 2
0 2
1 3
2 3
`}</Code>
        <p>This means that node 1 is connected to node 2, node 2 to node 3, etc.  Suppose that we want to represent this graph, and that if 0 is connected to 1, then 1 is not necessarily connected to 0.  You could store it in a matrix like this:</p>

<Code>
{`[[1, 1, 1, 0]
 [0, 1, 1, 1],
 [0, 0, 1, 1],
 [0, 0, 0, 1]]`}
</Code>
        <p>Notice that in this graph, for example, adj[0][1] is 1, just as we saw in the input connections, and so on.</p>

        <h2>Depth First Search and Breadth First Search</h2>

        <p>Both DFS and BFS are used to iterate through nodes of a graph.</p>

        <p>Given a start node, N, DFS will look at all of N's neighbors, choose one, put it in the "visited" set, look at all of its neighbors, etc.  DFS is ideal if you need to search the entire tree, and it is also used as a subcomponent of some algorithms such as Tarjan/Kosaraju's Strongly Connected Components.  It is generally implemented using recursion (but can also be implemented using a stack), like so:</p>

        <Code>
{`def dfs(node, visited = set()):
  for other in range(len(adj[node])):
    if adj[node][other] == 1 and other not in visited:
      visited.add(other)
      print("visiting ", other)
      dfs(other)
`}
        </Code>

        <p>BFS will look at <i>each</i> of N's neighbors, then look at <i>each</i> of their neighbors.  Due to its nature of always exploring the neighbors closest to the start node, fanning outwards, it naturally finds the shortest path from N to any other node in the graph, if all of the edges have the same weight/value.  BFS algorithms are usually implemented using a queue.</p>

        <Code>
{`def bfs(start_node):
  q = deque([start_node])
  visited = set()
  while q:
    node = q.popleft()

    for other in range(len(adj[node])):
      if other not in visited:
        visited.add(other)
        q.append(other) # notice that this appends to the back of the queue
`}
        </Code>

        <h2>Flood Fill and Dijkstra's Algorithm</h2>
        <p>There are many algorithms that are used to extract information out of graphs.  We won't have the time to cover all of them, but two useful ones to know that are easy to get started with are Flood Fill and Dijkstra's Algorithm.  Let's take a look at some example problems:</p>

        <SimpleQuoteBox>
          <h2>Forest Regions</h2>
          <p>Suppose you have a 2D grid of 0s and 1s, where each 1 represents a tree.  A group of trees (trees that are adjacent either north, east, south or west) is known as a forest region.  The following grid:</p>
          <Code>
          {`0 0 0 1
0 0 1 1
1 0 0 1
1 1 0 0`}</Code>
          <p>has two distinct forest regions, one at the top right and one at the bottom left.  Given this grid, write a program to calculate how many forest regions there are.</p>

        </SimpleQuoteBox>

        <p>The solution to this problem is to use the Flood Fill algorithm.  Flood Fill is essentially a BFS/DFS over each region of interest, over a common visited set.  Imagine all of the numbers in the grid connected to their north, south, east and west neighbors.  The solution is: when we see a 1, execute a BFS/DFS and add all of the visited nodes to a visited set.  This comprises 1 region.  Then when we see a 1 we haven't visited, do another BFS/DFS and add all of those 1s; that's another region.  If we execute Flood Fill on this grid, we get two regions.  Flood Fill is O(n) time, where n is the number of squares in the grid.</p>

        <p>Notice that in the following code, we never explicitly define a graph in an adjacency matrix or list - in this case, the grid itself is already a representation of the graph, where each node is connected to its north, south, east and west neighbors.  We'll take advantage of that.</p>

        <Code>
          {`# Read in the input
N, M = [int(x) for x in input().split(" ")]
grid = [input().split(" ") for x in range(N)]

# define a DFS
def dfs(r, c, visited):
  # neighbors are north, south, east, west
  neighbors = [(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)]
  for nr, nc in neighbors:
    # bounds check
    if 0 <= nr < len(grid) and 0 <= nc < len(grid[r]):
      # check if it's a "1"
      if grid[nr][nc] == "1":
        visited.add((nr, nc))
        # keep searching
        dfs(nr, nc, visited)

# Flood fill: iterate through each cell and if it's a 1
# and hasn't been visited, visit it and add 1 to forest
# regions

forest_regions = 0
visited = set()

for r in range(len(grid)):
  for c in range(len(grid[r])):
    if grid[r][c] == "1" and (r, c) not in visited:
      dfs(r, c, visited)
      forest_regions += 1

print(forest_regions)
`}
        </Code>

        <p>Flood Fill is commonly used to identify and stratify separate parts of the graph, like forest regions.  It might not look powerful, but it can be used in a variety of ways.  For another example where flood fill comes in handy, look at <a href="https://open.kattis.com/problems/10kindsofpeople" target="_blank">this</a> problem.</p>

        <h2>Dijkstra's Algorithm</h2>

        <p>A familiar and intuitive graph operation is finding the shortest path between two nodes.  BFS will do this for us if all of the edges in the graph are weighted the same, but what if they have different weights?  Check out the following graph:</p>

        <img src="dijkstra1.png" width="600" height="300"/>

        <p>Notice how in this graph, the shortest path by distance is actually to traverse nodes 1, 2, 3, and finally 4.  Dijkstra's algorithm computes shortest path in O(something) time, and is fairly straightforward to implement.  Imagine that we had the picture above as input:</p>

        <Code>
      {`5 # 5 nodes
A B 6 # node A to node B with distance 1
A D 1
B C 5
B E 2
D B 2
D E 1
E C 5`}</Code>

        <p>In Dijkstra's algorithm, we keep track of a list of distances from each node to the start node, initializing them all at infinity.  At first, we only know about the edges going out of the starting node.  We take the minimum distance edge from the start node to another node.  Now we take into account those additional edges from the node we visited.  Then we continually take the minimum distance edge that does <i>better</i> than the distance we already knew.  If at any point we reach the ending node, we know it's the shortest path to get there.</p>

        <p>The best way to implement Dijkstra's algorithm is with a <i>priority queue</i>, which is most straightforwardly a minimum heap in Python.  The code looks like this:</p>
        <Code>
{`from heapq import heappush, heappop
oo = float("inf")
# M is the adjacency matrix where M[node1][node2] is the distance between node 1 and node 2
# N is the number of nodes we have
def dijkstra(start_node, end_node):
  D = [oo for i in range(N)]
  D[start_node] = 0

  q = [(0, start_node)]
  while q:
    d, node = heappop(q)
    print("I'm visiting", node)

    if node == end_node:
      return d

    for i in range(len(M[node])):
      if M[node][i] != -1 and M[node][i] != 0 and M[node][i] + d < D[i]:
        D[i] = M[node][i] + d
        heappush(q, (M[node][i] + d, i))
  return -1`}
</Code>
      <p>For the example graph, our adjacency matrix might look something like:</p>
        <Code>
{`[[ 0,  6, -1,  1, -1], # A-B is 6, A-D is 1
 [-1,  0,  5, -1,  2],
 [-1,  2,  0, -1,  1],
 [-1, -1, -1,  0, -1],
 [-1, -1,  5, -1,  0]]`}</Code>
        <p>Running Dijkstra's algorithm from Node A (0) to Node B (1) would return 3 (even though there's a direct path, because that path is length 6)</p>

      </div>
    
    )
  }
}

export default Graph;
