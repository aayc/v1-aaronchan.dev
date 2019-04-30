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

class Projects extends Component {
  constructor (props) {
    super(props)
  }

  render() {

    return (
      <p>Hello</p>
    );
  }
}



export default Projects;
