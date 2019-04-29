import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import DraftsIcon from '@material-ui/icons/Send';
import Snippet from './HomeFeatureSnippet.jsx'
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
   heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
})

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <Grid container spacing={8} style={{ marginTop: "50px", marginLeft: "30px" }}>
          <Grid item xs={4} sm={2}>
            <center>
              <Avatar alt="Aaron Chan" src="me.jpg" style={{width: 120, height: 120, marginTop: 20}}/>
              <br />
              <div>
              <Typography component="h1" variant="h4">Aaron Chan</Typography>
              <Typography component="h1" variant="overline" 
                style={{ marginTop: "5px", lineHeight: "16px" }}>
                urbanite friend coder pianist chef engineer cellist clown
              </Typography>
              </div>
              <br /><br /><br />
            </center>
            <div align="center" style={{ marginRight: "20px"}}>
              <Link href={"https://google.com"} variant="h5">Projects</Link>
              <br />
              <br />
              <Link href={"https://google.com"} variant="h5" gutterBottom>Contest Coding</Link>
              <br />
              <br />
              <Link href={"https://google.com"} variant="h5">Music</Link>
              <br />
              <br />
              <Link variant="h5">Contact</Link>
            </div>
          </Grid>
          <Grid item xs={8} sm={6}>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
