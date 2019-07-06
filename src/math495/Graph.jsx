import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Graph extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Graph Approaches</h1>

      <p>In my opinion, knowing how to respond to a graph-based problem is the easy part.  There are a few well-known algorithms that will account for 90% of the graph problems you run into.  The trickiness of graph problems lies in a) identifying the problem as a graph problem and b) implementing the algorithm correctly.  The steps to most graph algorithms are straightforward, but it's easy to make a typo if you're moving quickly.  Most graphs contain nodes and edges between those nodes (connections), some graphs have "weighted" edges meaning that connections have values associated with them, and some graphs have directed edges meaning that just because you can go from node A to node B doesn't mean you can go from node B to node A.</p>
      
      <h3>Identifying a Graph Problem</h3>
      <p>The most easily identifiable graph problems talk about a set of things and a set of relationships between those things.  For example, cities and roads, or people and friendships.  However, some problems are graph problems in disguise, such as certain board games, where "traveling" is more abstract, but a relevant way to approach the problem.</p>

      <p>Overall, if you can clearly point to what represents a node and what represents an edge, you'll probably find yourself needing a graph.</p>

      <h3>Representing a Graph</h3>
      <p>The two major ways to represent a graph are adjacency lists and adjacency matrices.</p>

      <p>Adjacency lists are preferable for sparse graphs (many nodes, few connections), are generally clearer to use but more code to implement.  Adjacency matrices are preferable for dense graphs (few nodes, many connections) and are easy to setup but cost O(n^2) memory for n nodes.</p>

      <p>Setting up an adjacency list usually consists of making a Node data structure that can hold an id and a set of connected nodes.  Node A can travel to Node B if B is in A.neighbors.  Take a look at the following example:</p>
      
      <Code>
    code here
      </Code>

      <p>Setting up an adjacency matrix entails making a matrix that is NxN where N is the number of nodes, and if adj[A][B] != infinity then A can move to B with cost adj[A][B].  Take a look at the following example:</p>
    
      <Code>
      code here
      </Code>
`
      <h2>Common Graph-based Algorithms</h2>
      <h3>Breadth First Search</h3>
    
      <p>Breadth first search (and its cousin, Depth first search) are both ways to look through an entire graph given a starting node.  Breadth first search involves starting a node, exploring all the nodes connected to it, then exploring all the nodes connected around those nodes just explored.  By conducting BFS on a graph where all edges are equally weighted, you will be finding the shortest path between the start node and each node you visit in the graph.  BFS is almost universally conducted with a queue data structure because of its First-In-First-Out (FIFO) retrieval pattern.  The pseudocode looks like this:</p>
    
      <Code>
{`graph = adjacency matrix
q = [start_node]
visited = set()
while !q: # while queue is not empty
  n = q.pop(0) # get our current node

  if n == end_node:
    # we're done
    return something

  candidates = [j for j in graph[n] if graph[n][j] != inf and j not in visited]
  q += candidates # visit nodes that a) haven't been visited and b) are connected
  visited.add(candidates)

return None # reaching end is impossible`}
      </Code>

      <h3>Depth First Search</h3>
      
      <p>Depth first search continues to explore down the tree by successively visiting neighbor's neighbors, instead of every neighbor of each node.  DFS can be implemented extremely easily with recursion.</p>
      <Code>
{`def dfs (graph, n, end, visited):
  if n == end:
    return something # base case

  candidates = [j for j in graph[n] if graph[n][j] != inf and j not in visited]
  for candidate in candidates:
    visited.add(candidate)
    
    dfs_result = dfs(graph, candidate, end, visited)
    if dfs_result is not None:
      return dfs_result
  return None`}
      </Code>

      <h3>Dijkstra's Algorithm</h3>
      <p>This algorithm finds the shortest path from start node to end node with edges that have positive weights (that don't necessarily all have to be the same).  In the following example, I use a list to hold the distances from start node to each node, and a second list to hold the "paths" between start node to each node.</p>

      <h3>Enrichment: Maximum Flow Algorithm</h3>

      </div>
    
    )
  }
}

export default Graph;
