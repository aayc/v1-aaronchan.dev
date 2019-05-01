import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Textlink from '@material-ui/core/Link';
import DraftsIcon from '@material-ui/icons/Send';
import Snippet from './HomeFeatureSnippet.jsx'
import Avatar from '@material-ui/core/Avatar';
import { Route, Link, BrowserRouter }  from 'react-router-dom';
import './App.css';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  showcasePicture: {
    width: "90%",
    borderRadius: "25px",
  },
  showcaseText: {
    width: "70%",
  },
}

class Projects extends Component {
  render() {

    return (
      <Grid container xs={12} sm={10} justify="center">
        <center>
          <Typography variant="h2">side projects</Typography>
          <p><i>some fail, some succeed, all are fun</i></p>
        </center>
        <ProjectTeaser
          left_child={<img src="wordmath-recording.gif" alt="Word Math Screenshot" style = { styles.showcasePicture } />}
          right_child={<h2>math with word embeddings</h2>}
        />
        <ProjectTeaser
          left_child={<img src="politweet-screenshot.png" alt="Politweet Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={{width: "70%"}}>
            <h2>politweet</h2>
            <p>a 79% accuracy attempt to classify tweets by political ideology.</p>
            <p>see our unofficial <Textlink variant="p">report</Textlink> and <Textlink variant="p">repository</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="byuapi-screenshot.png" alt="BYU API Screenshot" style = { styles.showcasePicture } />}
          right_child={<h2>BYU Coursemap API</h2>}
        />
        <ProjectTeaser
          left_child={<img src="qlearning-recording.gif" alt="QLearn Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
            <h2>fun with reinforcement learning</h2>
            <p>one page implementation of temporal difference reinforcement learning, applied to a little rat-in-a-cage simulation.</p>
            <p><Textlink variant="p" href={"http://thatnerd2.github.io/projects/rat-reward-js/index.html"} target="_blank" >check it out</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="tanks-recording.gif" alt="Tanks Game GIF Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
              <h2>Tanks!</h2>
              <p>a browser take on a classic formulaic tanks game.  WASD to move, click to shoot.  supports 1-2 players across the 20 level campaign.</p>
              <p><Textlink variant="p" href={"https://enigmatic-reef-9847.herokuapp.com"}>play now</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="corridors-screenshot.png" alt="Corridors Screenshot" style = { styles.showcasePicture }/>}
          right_child={
            <div style={styles.showcaseText}>
              <h2>corridors: socket.io library</h2>
              <p>a lightweight virtual room management library for nodejs socket.io, built for multiplayer games.</p> 
              <p><Textlink variant="p" href={"https://www.npmjs.com/package/corridors"}>see it on npm</Textlink></p>
            </div>
          }
        />
      </Grid>
    );
  }
}

class ProjectTeaser extends Component {
  render () {
    const { left_child, right_child } = this.props

    return (
      <Grid container style={{marginTop: "80px"}} justify="center">
      <Grid container direction="row" alignItems="center" justify="center" xs={6} sm={5}>
        {left_child} 
      </Grid>
      <Grid container xs={6} sm={5} justify="center">
        {right_child}
      </Grid>
      </Grid>
    )
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Projects;//withStyles(styles)(Projects);
