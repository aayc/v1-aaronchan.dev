import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class SimpleQuoteBox extends Component {
  render () {
    const paperStyle = {
      width: '100%',
      overflowX: 'auto',
    }

    return (
      <Paper style={paperStyle}>
        <div style={{padding: "20px"}}>
          {this.props.children}
        </div>
      </Paper>
    )
  }
}

export default SimpleQuoteBox;
