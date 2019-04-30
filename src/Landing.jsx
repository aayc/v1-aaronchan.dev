import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class LandingPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Grid item xs={12} sm={10} container>
        <Grid item xs={5} sm={5}>
          <Typography>Problem Statement </Typography>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Typography>Constraints</Typography>
        </Grid>
        <br />
        <Grid item xs={10} sm={10}>
          <img src="terminal-lger.gif" alt="solving problems in the terminal"/>
        </Grid>
      </Grid>
    )
  }
}

export default LandingPage

