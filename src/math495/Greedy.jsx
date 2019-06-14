import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Greedy extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Greedy</h1>

      <p>A greedy algorithm is one that sequentially chooses <i>locally</i> optimal solutions in hopes that it will lead to the <i>globally</i> optimal solution.</p>

      <p>Implementing greedy algorithms is easy; proving that they will lead to optimal solutions is hard.  To do it thoroughly, you generally need an inductive proof.  Since that's hard and you won't usually have time to spare for it, the two empirical ways are to go by your gut or, if your gut is uncertain, case by case analysis.  There are many practice problems in this section in order to give your gut some intuition.  As always, the input constraints are usually a good tip-off, since greedy approaches to competition problems tend to be O(nlog(n)) or better.</p>

      <h3>Case by case analysis</h3>
      <p>Take a look at the following problem:</p>

      <SimpleQuoteBox>
      <h3>Simple Scheduling</h3>
      <p>Suppose you have <i>n</i> events, each of which start at t = s[i] and end at t = e[i].  Every event is equal in value and many of them overlap in time.  Given n, s, and e, what is the maximum number of events you can attend?</p>
      </SimpleQuoteBox>

      <p>The brunt of the work in solving a greedy problem once you know it is a greedy problem, is formulating a greedy strategy.  One strategy that might come to mind is to always pick the events that start the earliest.  Another might be to pick the events that take the least time.  Both are cute, but wrong.  If you pick the events that start earliest, you might pick a super long event.  If you pick the ones that take the least time, you might pick an event that is short but interrupts two events that you could have chosen instead.  You might start wondering if this really is a greedy problem.</p>

      <p>The cases you have (i.e. the problems your greedy algorithm needs to overcome) are dealing with a) really long events, b) events that interrupt other events.  If your algorithm can pick, even locally, events that avoid both of those problems, then you're good to go.  What are the possible strategies?  We've thought about picking the earliest starting events, the shortest events...given our information, the only simple metric left are the earliest ending events.  It turns out that this strategy is optimal: pick the earliest ending events and you avoid (a) and you minimize the chances of (b).</p>

      <Code>
{`def solveScheduler (n, s, e):
  # let n, s, e be defined as in the problem spec.
  events = zip(s, e) # keep the times together in tuples
  events = sorted(events, key = lambda t: t[1]) # sort by ending time
  n_events = 1 # start at first event 
  free = events[0][1] # first time free
  for i in range(1, n):
    if events[i][0] >= free: # if we're free by the next event
      free = events[i][1] # take this event
      n_events += 1
  return n_events`}
      </Code>

      <p>So, if you're thinking that a greedy approach will work, then establish your cases and examine your strategies to see if they meet all your cases.  Often greedy approaches involve sorting your data, having a set search plan, and/or making some big assumptions.</p>

    <p>The good news is, if your greedy algorithm works, it's almost always fast enough to solve the problem in time, even for large input constraints.</p>
    )
  }
}

export default Greedy;
