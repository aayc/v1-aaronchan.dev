import React, { Component } from 'react';
import Textlink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
      <div>
        <center>
          <Typography variant="h2">side projects</Typography>
          <p><i>some fail, some succeed, all are fun</i></p>
        </center>
        <ProjectTeaser
          left_child={<img src="wordmath-recording.gif" alt="Word Math Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
              <h2>word embedding math</h2>
              <p>adding and subtracting word embeddings leads to some interesting insights on how concepts are related.</p>
              <p><Textlink>try it out</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="politweet-screenshot.png" alt="Politweet Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
            <h2>politweet</h2>
            <p>a 79% accuracy attempt to classify tweets by political ideology.</p>
            <p>
              see our unofficial <Textlink href={"https://github.com/aayc/politweet/blob/master/Politweet.pdf"} target="_blank">report</Textlink> and <Textlink href={"https://github.com/aayc/politweet"} target="_blank">repository</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="byuapi-screenshot.png" alt="BYU API Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
              <h2>BYU coursemap API</h2>
              <p>want to programmatically retrieve all the classes happening 2-5pm?  now you can.</p>
              <p><Textlink href={"https://github.com/aayc/byu-coursemajor-api"} target="_blank">read it over</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="qlearning-recording.gif" alt="QLearn Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
            <h2>fun with reinforcement learning</h2>
            <p>one page implementation of temporal difference reinforcement learning, applied to a little rat-in-a-cage simulation.</p>
            <p><Textlink href={"http://thatnerd2.github.io/projects/rat-reward-js/index.html"} target="_blank" >check it out</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="tanks-recording.gif" alt="Tanks Game GIF Screenshot" style = { styles.showcasePicture } />}
          right_child={
            <div style={styles.showcaseText}>
              <h2>tanks!</h2>
              <p>a browser take on a classic formulaic tanks game.  WASD to move, click to shoot.  supports 1-2 players across the 20 level campaign.</p>
              <p><Textlink target="_blank" href={"https://enigmatic-reef-9847.herokuapp.com"}>play now</Textlink></p>
            </div>
          }
        />
        <ProjectTeaser
          left_child={<img src="corridors-screenshot.png" alt="Corridors Screenshot" style = { styles.showcasePicture }/>}
          right_child={
            <div style={styles.showcaseText}>
              <h2>corridors: socket.io library</h2>
              <p>a lightweight virtual room management library for nodejs socket.io, built for multiplayer games.</p> 
              <p><Textlink target="_blank" href={"https://www.npmjs.com/package/corridors"}>see it on npm</Textlink></p>
            </div>
          }
        />
      </div>
    );
  }
}

class ProjectTeaser extends Component {
  render () {
    const { left_child, right_child } = this.props

    return (
      <Grid container style={{marginTop: "80px"}}>
      <Grid item xs={6} sm={5}>
        {left_child} 
      </Grid>
      <Grid item xs={6} sm={6}> 
        <center>
        {right_child}
        </center>
      </Grid>
      </Grid>
    )
  }
}

export default Projects;
