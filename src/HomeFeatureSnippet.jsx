import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
})

class HomeFeatureSnippet extends Component {
  render() {
    const { classes } = this.props;

    return (<Grid container spacing={16} justify="center">
      /* tbh you probably dont' want a grid here*/
      <Grid item>
        <Typography>Hello I'm the left</Typography>
      </Grid>
      <Grid item>
        <Typography>Hello hopefully I'm the right </Typography>
      </Grid>
    </Grid>);
  }
}

HomeFeatureSnippet.propTypes = {
  classes: PropTypes.object.isRequired,
};
 export default withStyles(styles)(HomeFeatureSnippet);
