import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
//import Image from '@material-ui/core/Image';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
})

class HomeFeatureSnippet extends Component {
  render() {
    const { classes, left_child, right_child } = this.props;

    return (<Grid container spacing={16} justify="center" alignItems="center">
      <Grid item xs={6} sm={4}>
        {left_child}
      </Grid>
      <Grid item xs={6} sm={4}>
        {right_child}
      </Grid>
    </Grid>);
  }
}

HomeFeatureSnippet.propTypes = {
  classes: PropTypes.object.isRequired,
};
 export default withStyles(styles)(HomeFeatureSnippet);
