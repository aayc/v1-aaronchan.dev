import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route }  from 'react-router-dom';
import DatastructuresIcon from '@material-ui/icons/Dashboard';
import ReadmeIcon from '@material-ui/icons/ChromeReaderMode';
import ClassIcon from '@material-ui/icons/Class';
import SolutionIcon from '@material-ui/icons/BubbleChart';
import BruteforceIcon from '@material-ui/icons/Apps';
import GreedyIcon from '@material-ui/icons/AttachMoney';
import GraphIcon from '@material-ui/icons/Share';
import BitManipulationIcon from '@material-ui/icons/Filter1';
import DynamicProgrammingIcon from '@material-ui/icons/BlurLinear';
import ApproachIcon from '@material-ui/icons/Help';

import Readme from './Readme.jsx';
import Course from './Course.jsx';
import Pset1 from './Pset1.jsx';
import Pset2 from './Pset2.jsx';
import Blitz1 from './Blitz1.jsx';
import Pset3 from './Pset3.jsx';
import Pset4 from './Pset4.jsx';
import Pset5 from './Pset5.jsx';
import Pset6 from './Pset6.jsx';
import Pset7 from './Pset7.jsx';
import Pset8 from './Pset8.jsx';
import Pset9 from './Pset9.jsx';
import Python from './Python.jsx';
import Approach from './Approach.jsx';
import DataStructures from './DataStructures.jsx';
import BruteForce from './BruteForce.jsx';
import Greedy from './Greedy.jsx';
import Bit from './Bit.jsx';
import Graph from './Graph.jsx';
import Dp from './Dp.jsx';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});


const PAGES = [
  { nested: false, link: "/math495/readme", icon: (<ReadmeIcon />), text: "Read Me" },
  { nested: false, link: "/math495/course", icon: (<ClassIcon />), text: "Course Materials" },
  { nested: true, icon: (<SolutionIcon />), text: "Pset Solutions", children: [
    {nested: false, link: "/math495/pset1", icon: (<SolutionIcon />), text: "1: Python Practice" },
    {nested: false, link: "/math495/blitz1", icon: (<SolutionIcon />), text: "Blitz 1" },
    {nested: false, link: "/math495/pset2", icon: (<SolutionIcon />), text: "2: Data Structures" },
    {nested: false, link: "/math495/pset3", icon: (<SolutionIcon />), text: "3: Strings" },
    {nested: false, link: "/math495/pset4", icon: (<SolutionIcon />), text: "4: Brute Force" },
    {nested: false, link: "/math495/pset5", icon: (<SolutionIcon />), text: "5: Greedy" },
    {nested: false, link: "/math495/pset6", icon: (<SolutionIcon />), text: "6: Recursion" },
    {nested: false, link: "/math495/pset7", icon: (<SolutionIcon />), text: "7: Graph" },
    {nested: false, link: "/math495/pset8", icon: (<SolutionIcon />), text: "8: Dynamic Programming" },
    {nested: false, link: "/math495/pset9", icon: (<SolutionIcon />), text: "9: Mixed 1" }
  ] },
  { nested: false, link: "/math495/python", icon: (<img src="../python-logo.png" style={{ width: "26px", height: "26px" }} alt="python icon" />), text: "Python in a Nutshell"},
  { nested: false, link: "/math495/approach", icon: (<ApproachIcon />), text: "Approaching a Problem" },
  { nested: false, link: "/math495/datastructures", icon: (<DatastructuresIcon />), text: "Data Structures" },
  { nested: false, link: "/math495/bruteforce", icon: (<BruteforceIcon />), text: "Brute Force" },
  { nested: false, link: "/math495/greedy", icon: (<GreedyIcon />), text: "Greedy" },
  { nested: false, link: "/math495/graph", icon: (<GraphIcon />), text: "Graph" },
  { nested: false, link: "/math495/bit", icon: (<BitManipulationIcon />), text: "Bit Manipulation" },
  { nested: false, link: "/math495/dp", icon: (<DynamicProgrammingIcon />), text: "Dynamic Programming" },
];

const STYLE_CLASSES = {
  article: {
    paddingLeft: "100px",
    maxWidth: "600px",
    textAlign: "left",
    lineHeight: "25px",
  },
};

const ROUTES = (
  <Switch>
    <Route exact path="/math495/readme" render={(props) => <Readme {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/course" render={(props => <Course {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset1" render={(props => <Pset1 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/blitz1" render={(props => <Blitz1 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset2" render={(props => <Pset2 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset3" render={(props => <Pset3 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset4" render={(props => <Pset4 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset5" render={(props => <Pset5 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset6" render={(props => <Pset6 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset7" render={(props => <Pset7 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset8" render={(props => <Pset8 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/pset9" render={(props => <Pset9 {...props} style_classes={STYLE_CLASSES} />)}/>
    <Route exact path="/math495/python" render={(props) => <Python {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/approach" render={(props) => <Approach {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/datastructures" render={(props) => <DataStructures {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/bruteforce" render={(props) => <BruteForce {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/greedy" render={(props) => <Greedy {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/graph" render={(props) => <Graph {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/bit" render={(props) => <Bit {...props} style_classes={STYLE_CLASSES} />}/>
    <Route exact path="/math495/dp" render={(props) => <Dp {...props} style_classes={STYLE_CLASSES} />}/>
  </Switch>
)

class Math495App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: {}
    };
  }

  renderListItem = (item, i, depth = 0) => {
    if (item.nested) {
      return [
          <ListItem key={i} button style={{paddingLeft: (2 * depth ) + "em"}} onClick={() => this.handleClick(i)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText inset primary={item.text} />
            {this.isExpanded(i) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>,
          <Collapse key={-(i + 1)} in={this.isExpanded(i)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { item.children.map((page, i) => this.renderListItem(page, i + 1, depth + 1)) }
            </List>
          </Collapse>
      ]
    }
    else {
      return (
        <ListItem key={i} button component="a" href={item.link} style={{ paddingLeft: (2 * depth) + "em" }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText inset primary={item.text} />
        </ListItem>
      )
    }
  };

  handleClick = (i) => {
    let new_open = {...this.state.open}
    new_open[i] = !this.isExpanded(i)
    this.setState(state => ({ open: new_open }))
  };

  isExpanded = (i) => this.state.open.hasOwnProperty(i) ? this.state.open[i] : false

  render() {
    const { classes } = this.props;
    const NAV_WIDTH = 3

    return (
      <div style={{textAlign: "center"}}>
        <Grid container spacing={16} style={{ /*background: "#336633",*/ marginTop: "50px" }}>
          <Grid item xs={NAV_WIDTH} sm={NAV_WIDTH} style={{ background: "#FFFFFF", paddingLeft: "50px"}}>
            <Typography component="h1" variant="h4">competitive coding</Typography>
            <center>
            <br />
            <List
                subheader={<ListSubheader component="div">Table of Contents</ListSubheader>}
                className={classes.root}
              >
              { PAGES.map((page, i) => this.renderListItem(page, i, 0)) }
            </List>
            </center>
          </Grid>
          <Grid item style={{/*background: "#BBBBBB"*/}} xs={12 - NAV_WIDTH} sm={12 - NAV_WIDTH}>
            { ROUTES }
          </Grid>
        </Grid>
      </div>
    )
  }
}

Math495App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Math495App);
