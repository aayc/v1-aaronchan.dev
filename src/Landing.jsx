import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageGrid from './ImageListDemo.jsx';

const styles = {
  imageGrid: {
    maxWidth: "300px",
    height: "100%"
  }
};

class LandingPage extends Component {
  render () {
    return (
      <ImageGrid />
    )
  }
}

export default LandingPage

