import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    //minWidth: 700,
  },
});

const time_complexity_table = [
  ["11 or less", "O(n!), O(n^6)"],
  ["15 to 18", "O(2^n * n^2)"],
  ["18 to 22", "O(2^n * n)"],
  ["100", "O(n^4)"],
  ["400", "O(n^3)"],
  ["2000", "O(n^2 * log(n))"],
  ["10,000", "O(n^2)"],
  ["1,000,000", "O(nlog(n))"],
  ["100,000,000", "O(n), O(log(n)), O(1)"]
];

const algorithm_paradigm_table = [
  ["Is there a key that can be sorted to make it easy to find the answer?", "Try a greedy algorithm"],
  ["Can you split the problem into two smaller problems that can be combined?  How about big and small, left and right?", "It might be divide and conquer"],
  ["Do the inputs or the solution have a natural order, like string characters, leaves in a tree, or permutation elements?", "Exploit the order with dynamic programming"],
  ["Are certain operations being done repeatedly?  Can they be sped up with a data structure?", "Try using a hash set/map or heap/priority queue"],
  ["Can my problem be formulated as a set of linear constraints, potentially with integer solutions?", "Try a linear programming approach"],
  ["Does my problem look like the traveling salesman, satisfiability, or some other NP complete problem?", "Use backtracking, branch and bound or some other complete search"]
]

class Approach extends Component {

  render () {
    const { classes, style_classes } = this.props

    return (
      <div style={style_classes.article}>

      <h1>Approach</h1>
      <p>The steps required to understand a problem are the most <b>predictable</b> part of competitive coding.  A good understanding of the problem will help you avoid the following scenarios:</p>
      <ul>
        <li>You have no idea where to start.</li>
        <li>Your solution is a mess and you know it's because you jumped in too early.</li>
        <li>Your solution solves the problem...except for one pesky test case.</li>
      </ul>
      <p>When you open up a problem, make sure to look at the following:</p>

      <h3>Input and Output</h3>
      <p>What exactly is the input to the problem, and what is the output?</p>
      <SimpleQuoteBox>
        <p>Mary and Bob were walking down the street and then suddenly and then suddenly and then suddenly and then suddenly and then suddenly and then suddenly and then suddenly       </p>
      </SimpleQuoteBox>
      <p>You might be getting ready to do WRONG</p>
      <SimpleQuoteBox>
        <p>BUT THEN ...there was a wolf and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat and he tried to eat</p>
      </SimpleQuoteBox>
      <p>Aha!  Now you know that you don't need to <i>generate</i> all the possibilities, you just need to know how many there are.</p>
      <p>Knowing your input and output will give you clues about the solution and help you avoid the pain of giving the right answer to the wrong problem.</p>

      <h3>Constraints</h3>
      <p>"It might be easier to know how to solve this if I knew the time complexity of the algorithm" — good news, you can figure it out by examining the constraints.  Here are some <u>rough</u> estimates of what time complexities are sufficient for the following input sizes:</p>

      <SimpleTable 
        classes={classes}
        headers={["Maximum Input Size", "Worst Accepted Time Complexity"]}
        data={time_complexity_table} />

      <h3>Feasibility</h3>
      <p>In coding competitions, time is usually measured as the cumulative sum over the time elapsed for <i>every</i> problem until solved.  If you have 6 problems and 1 minute goes by, your time is 6 minutes.  It's therefore to your advantage to locate and solve the easiest problems as fast as possible, so that you stop those particular problem clocks and save time.</p>

      <h3>Formulation</h3>
      <p>Ask yourself if you're trying to solve a numerical problem, an string problem, graph, geometric, set, etc.  Which one seems easiest?</p>
      <SimpleTable 
        classes={classes}
        headers={["Ask", "If so"]}
        data={algorithm_paradigm_table} />

      <h3>Stuck?</h3>
      <p>We've all been there.  Nothing seems to fit, so what do I do now?  Here are some suggestions:</p>
      <ul>
        <li>Can I construct an input example small enough to solve by hand?  What happens when I try to solve it?</li>
        <li>Do I know exactly what the input and output are?</li>
        <li>Are there special cases of the problem I know how to solve?
          <ul>
            <li>Can I solve the problem efficiently when I ignore some of the input parameters?</li>
            <li>Does the problem become easier to solve when I set some of the input parameters to trivial values, such as 0 or 1?</li>
            <li>Can I simplify the problem to the point where I can solve it efficiently?</li>
            <li>Why isn’t this special case algorithm be generalized to a wider class of inputs?</li>
          </ul>
        </li>
      </ul>

      <h3>References</h3>
      <ul>
        <li>The Algorithm Design Manual, by Steven Skiena</li>
        <li>Time complexity table @ <a target="_blank" href="https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/">hackerearth</a></li>
      </ul>


      </div>
    )
  }
}

class SimpleQuoteBox extends Component {
  render () {
    const paperStyle = {
      width: '100%',
      overflowX: 'auto',
    }

    return (
      <Paper style={paperStyle}>
        <div style={{padding: "20px"}}>
          {this.props.children}
        </div>
      </Paper>
    )
  }
}

class SimpleTable extends Component {
  render () {
    const { classes, headers, data } = this.props;
    const row_cells_range = new Array(headers.length)

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {headers.map((row, i) => (
                <TableCell key={i} align="center">{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                {row.map((r, j) => ( 
                  <TableCell key={ i*headers.length + j * headers.length} align="center">{r}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(Approach);
