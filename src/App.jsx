import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Landing from './Landing.jsx';
import Textlink from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { Switch, Route, BrowserRouter }  from 'react-router-dom';
import Math495Home from './math495/Math495Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Make Math495 page use its own navbar */}
          <Route path="/math495" component={Math495Home} />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const DefaultContainer = () => (
  <div className="App">
    <Grid container spacing={16} style={{ /*background: "#336633",*/ marginTop: "50px" }}>
      <Grid item xs={3} sm={3} style={{ paddingLeft: "30px" }}></Grid>
      <Grid item xs={3} sm={3} style={{ position: "fixed", paddingLeft: "30px"}}>
        <center>
          <Avatar alt="Aaron Chan" src="me-close.jpg" style={{width: 140, height: 140, marginTop: 20}}/>
          <br />
          <Typography component="h1" variant="h4">Aaron Chan</Typography>
          <Typography component="h1" variant="overline" 
            style={{ marginTop: "5px", lineHeight: "16px" }}>
            urbanite friend coder pianist chef engineer cellist clown
          </Typography>
          <Typography component="h1" variant="overline" 
            style={{ marginTop: "5px", lineHeight: "16px" }}>
            life-long student
          </Typography>
          <br />
        </center>
        <div align="center" style={{ marginRight: "20px"}}>
          <Textlink href={"/"} variant="h5">home</Textlink>
          <br /><br />
          <Textlink href={"/projects"} variant="h5">projects</Textlink>
          <br /><br />
          <Textlink href={"/math495"} variant="h5" gutterBottom>contest coding</Textlink>
          <br /> <br />
          <Textlink href={"/contact"} variant="h5">contact</Textlink>
        </div>
      </Grid>
      <Grid item style={{/*background: "#BBBBBB"*/}} xs={9} sm={9}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Grid>
    </Grid>
  </div>
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
