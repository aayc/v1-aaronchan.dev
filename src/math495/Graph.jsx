import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Graph extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style.classes_article}>
      <h1>Graph Approaches</h1>

      <p>In my opinion, knowing how to respond to a graph-based problem is the easy part.  There are a few well-known algorithms that will account for 90% of the graph problems you run into.  The trickiness of graph problems lies in a) identifying the problem as a graph problem and b) implementing the algorithm correctly.  The steps to most graph algorithms are straightforward, but it's easy to make a typo if you're moving quickly.</p>
      
      <h3>Identifying a Graph Problem</h3>
      <p>The most easily identifiable graph problems talk about a set of things and a set of relationships between those things.  For example, cities and roads, or people and friendships.  However, some problems are graph problems in disguise, such as certain board games, where "traveling" is more abstract, but a relevant way to approach the problem.</p>

      <p>Overall, if you can clearly point to what represents a node and what represents an edge, you'll probably find yourself needing a graph.</p>

      <h3>Representing a Graph/h3>
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
      <h3>Common Graph-based Algorithms</h3>
      <p>

    )
  }
}

export default Graph;
