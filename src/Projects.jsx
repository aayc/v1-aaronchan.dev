import React, { Component } from 'react';
import Textlink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ContactButton from './Contact.jsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  buttonLink: {
    textDecoration: "none",
  }
}


class Projects extends Component {
  render() {

    return (
      <Grid container spacing={0} justify="center">
        <Grid item sm={12} xs={12} style={{marginTop: 20}}>
          <center>
          <Typography variant="h2">Projects</Typography>
          <Typography variant="overline">By Aaron Chan</Typography>
          <br />
          <br />
          <Grid container spacing={24} >
            <Grid item sm={2} xs={2}></Grid>
            <ImageTile image="wordmath-recording.gif" alt="Word Math Screenshot" title="Math with Words"
              description="Adding and subtracting word embeddings leads to some interesting insights on how concepts are related."
              buttonText="Demo" link="#"/>
            <ImageTile image="politweet-screenshot.png" alt="Politweet" title="Politweet"
              description="A 79% accuracy attempt to classify tweets based on political ideology."
              buttonText="See our unofficial paper" link="https://github.com/aayc/politweet/blob/master/Politweet.pdf"/>
            <Grid item sm={2} xs={2}></Grid>
            <Grid item sm={2} xs={2}></Grid>
            <ImageTile image="byuapi-screenshot.png" alt="BYU API Screenshot" title="BYU Course API"
              description="Retrieve schedule information, major requirements and more from BYU with this API" 
              buttonText="See on Github" link="https://github.com/aayc/byu-coursemajor-api"/>
            <ImageTile image="qlearning-recording.gif" alt="QLearn Screenshot" title="Fun with Q Learning"
              description="An implementation of Q reinforcement learning, applied to a little rat-in-a-cage simulation." 
              buttonText="Check it out" link="http://thatnerd2.github.io/projects/rat-reward-js/index.html"/>
            <Grid item sm={2} xs={2}></Grid>
            <Grid item sm={2} xs={2}></Grid>
            <ImageTile image="tanks-recording.gif" alt="Tanks Game GIF Screenshot" title="Tanks!"
              description="WASD to move, click to shoot.  Supports 1-2 players across a multi-level campaign."
              buttonText="Play it" link="https://enigmatic-reef-9847.herokuapp.com" />
            <ImageTile image="corridors-screenshot.png" alt="Corridors Screenshot" title="Corridors"
              description="a lightweight virtual room management library for nodejs socket.io, built for multiplayer games."
              buttonText="See on NPM" link="https://www.npmjs.com/package/corridors" />
          </Grid>
          <br />
          <br />
          
          <Link to="/" style={styles.buttonLink}>
            <Button variant="outlined" style={{ margin: 10, paddingRight: 25, paddingLeft: 25, fontWeight: "bold"}}>
              Home
            </Button>
          </Link>
          <Link to="/math495/readme" style={styles.buttonLink}>
            <Button variant="outlined" style={{ margin: 10, fontWeight: "bold"}}>
              Competitive Coding
            </Button>
          </Link>
          <ContactButton />
          </center>
        </Grid>
      </Grid>
    );
  }
}

class ImageTile extends Component {
  render () {
    const { image, alt, title, description, link, buttonText} = this.props;
    console.log("image: " + image);
    return (
      <Grid sm={4} xs={4} item> 
      <Card>
          <CardMedia image={image} style={{ height: 250}} title={alt} />
          <CardContent>
            <Typography variant="overline">{title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" color="secondary" style={{ fontWeight: "bold" }} onClick={() => { window.open(link, "_blank"); }}>
            {buttonText}
          </Button>
        </CardActions>
      </Card>
      </Grid>
    )
  }
}

export default Projects;
