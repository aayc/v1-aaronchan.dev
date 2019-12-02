import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Link, Switch, Route, BrowserRouter }  from 'react-router-dom';
import Math495Home from './math495/Math495Home.jsx';
import Projects from './Projects.jsx';
import WordMath from './wordmath/Wordmath.jsx';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import ContactButton from './Contact.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({})

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
          <Route path="/wordmath" component={WordMath} />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

class DefaultContainer extends Component {
  render() {

    return (
        <div className="App" style={{overflowX: "hidden"}}>
          <Grid container spacing={0} style={{ /*background: "#336633",*/ }}>
            <Grid item xs={12} sm={12} style={{ marginTop: "8%" }}> 
              <center>
                <div style={{ position: "relative" }}>
                  <Avatar alt="Aaron Chan" src="me-close.jpg" style={{width: 300, height: 300 }}/>
                  <FloatText len={4000} mTop="20px" mLeft="180px" text="urbanite" />
                  <FloatText len={1000} mTop="140px" mLeft="200px" text="coder" />
                  <FloatText len={2000} mTop="260px" mLeft="180px" text="pianist" />
                  <FloatText len={2500} mTop="20px" mLeft="-200px" text="statistician" />
                  <FloatText len={1500} mTop="140px" mLeft="-200px" text="chef" />
                  <FloatText len={3000} mTop="260px" mLeft="-190px" text="friend" />
                </div> <br /><br />
                <Typography component="h1" variant="h2">
                </Typography>
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

class FloatText extends Component {
  render () {
    const { mTop, mLeft, text, len } = this.props
    return ( 
      <Fade in={true} timeout={len}>
        <div>
        <Typography style = {{ 
          position: "absolute", 
          width: "100%",
          textAlign: "center",
          left: mLeft,
          top: mTop,
        }} variant="overline">{text}</Typography>
        </div>
      </Fade>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
