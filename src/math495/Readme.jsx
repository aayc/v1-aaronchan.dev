import React, { Component } from 'react';

class Readme extends Component {

  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>

      <h1>Read Me</h1>
      <p>This is an example-driven, non-comprehensive guide to approaching categories of algorithmic problems.</p>

      <p>This guide was written specifically for the BYU MATH 495 course audience, the majority of which are mathematics or computer science students.</p>

      <p>Written by Aaron Chan in 2019 and reflective of my experiences in contest programming over the past 5 years.</p>


      </div>
    )
  }
}

export default Readme;
