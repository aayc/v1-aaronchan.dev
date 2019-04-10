import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
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
        
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <center><Avatar alt="Aaron Chan" src="me.jpg" style={{width: 120, height: 120, marginTop: 20}}/></center>
            <br /><br />
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hi, I'm Aaron
            </Typography>
            <Typography style={{fontSize: 24}}>
              musician, programmer, former baby
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                {/*<Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>*/}
              </Grid>
            </div>
          </div>
          <Snippet />
          
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
