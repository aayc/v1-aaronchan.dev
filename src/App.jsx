import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Link, Switch, Route, BrowserRouter }  from 'react-router-dom';
import Math495Home from './math495/Math495Home.jsx';
import Projects from './Projects.jsx';
import Button from '@material-ui/core/Button';
import ContactButton from './Contact.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
})

const cssStyles = {
  buttonLink: {
    textDecoration: "none",
  }
}

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Make Math495 page use its own navbar */}
          <Route path="/math495" component={Math495Home} />
          <Route path="/projects" component={Projects} />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

class DefaultContainer extends Component {
  render() {
    return (
        <div className="App">
          <Grid container spacing={0} style={{ /*background: "#336633",*/ }}>
            <Grid item xs={12} sm={12} style={{ marginTop: "8%" }}> 
              <center>
                <Avatar alt="Aaron Chan" src="me-close.jpg" style={{width: 300, height: 300 }}/>
                <br />
                <Typography component="h1" variant="h2">
                  Hi, I'm Aaron Chan.
                </Typography>
        {/* urbanite friend coder pianist chef engineer cellist clown */}
      {/*<Typography variant="overline" style={{ position: "absolute", top: "20%" }} >Hello</Typography>*/}
                <br /> <br />
                <Link to="/projects" style={cssStyles.buttonLink}>
                  <Button variant="outlined" style={{ margin: 10, fontWeight: "bold"}}>
                    Projects
                  </Button>
                </Link>
                <Link to="/math495/readme" style={cssStyles.buttonLink}>
                  <Button variant="outlined" style={{ margin: 10, fontWeight: "bold"}}>
                    Competitive Coding
                  </Button>
                </Link>
                <ContactButton />
              </center>
            </Grid>
          </Grid>
        </div>
      )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
