import React, { Component } from 'react';


class Python extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Python in a Nutshell</h1>
      <h4>buckle up</h4>
      <p>yeah this one is going to take a lot of thought</p>
      </div>
    )
  }
}

export default Python;
