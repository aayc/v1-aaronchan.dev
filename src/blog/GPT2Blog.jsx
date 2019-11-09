import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    //minWidth: 700,
  },
});

class GPT2Blog extends Component {

  render () {
    const { classes } = this.props


    return (
      <div className={classes.root}>
        <Grid container spacing={16} style={{ marginTop: "50px" }}>
          <Grid item xs={2} sm={2} style={{ background: "#FFFFFF" }}>
            <h1></h1>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Typography variant="h2">In the middle with the whole thing lots of text how does it fill up</Typography>
          </Grid>
          <Grid item xs={2} sm={2} style={{ background: "#FFFFFF" }}>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default withStyles(styles)(GPT2Blog);
