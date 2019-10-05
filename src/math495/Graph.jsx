import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Graph extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Graph based Algorithms</h1>

        <p>Graphs are used to model relationships between things.  The "things" are called nodes/vertices and the relationships are called edges.  For example, you could model a set of buildings and their relationship by distance, so you would have a set of nodes that represent each building, and an edge from node A to node B would have some value, like, which would represent distance, like 5 miles.  Another example of a graph would be a social network, with nodes as people and edges as relationship type.</p>

        <p>Representing, traversing, and making decisions based on graphs are essential knowledge tools.  </p>


      </div>
    
    )
  }
}

export default Graph;
