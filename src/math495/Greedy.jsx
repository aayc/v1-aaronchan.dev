import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';
import SimpleQuoteBox from './SimpleQuoteBox.jsx';

class Greedy extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Greedy</h1>

        <p>A greedy algorithm is one that sequentially chooses <i>locally</i> optimal solutions in hopes that it will lead to the <i>globally</i> optimal solution.  For simple example, if you want to get the biggest total volume of watermelons and you can only pick 3, and you have a big list of watermelons, then the greedy strategy is to pick and remove the biggest watermelon from the list, 3 times.</p>

        <p>Coding up greedy algorithms is easy; proving that they will lead to optimal solutions is hard.  Here are two clues that you might need to use a greedy algorithm:</p>

        <ul>
          <li>The algorithm runtime needs to be O(nlogn) or better</li>
          <li>You need to minimize something or maximize something</li>
        </ul>

      <p>Once you've decided that you're going to go greedy, you should think about whether your algorithm will <b>always</b> arrive at the optimal result.  One way to reason about this is to think about whether your greedy algorithm will always "stay ahead" of any other solution.  Another way is to break down the problem into cases, and analyze each of the cases to see if your greedy algorithm performs optimally in every case.  We will look at both of these in the context of this next problem:</p>

      <SimpleQuoteBox>
      <h3>Simple Scheduling</h3>
      <p>Suppose you have <i>n</i> events, each of which start at t = s[i] and end at t = e[i].  Every event is equal in value and many of them overlap in time.  Given n, s, and e, what is the maximum number of events you can attend?</p>
      </SimpleQuoteBox>

        <p>So the clue is maximize, and also that a brute force would be way too slow.  Now, the brunt of the work in solving a greedy problem once you know it is a greedy problem, is formulating a greedy strategy.  One strategy that might come to mind is to always pick the events that start the earliest.  Another might be to pick the events that take the least time.  Both work in some cases but can be fooled into producing a bad answer:  if you pick the events that start earliest, you might pick a super long event, whereas if you pick the ones that take the least time, you might pick an event that is short but interrupts two events that you could have chosen instead.</p>

      <p>The cases you have (i.e. the problems your greedy algorithm needs to overcome) are dealing with a) really long events, b) events that interrupt other events.  If your algorithm can pick, even locally, events that avoid both of those problems, then you're good to go.  What are the possible strategies?  We've thought about picking the earliest starting events, the shortest events...given our information, the only simple strategy left is to pick the earliest ending events.  It turns out that this strategy is optimal: pick the earliest ending events and you avoid (a) and you minimize the chances of (b).</p>

      <Code>
{`def solveScheduler (n, s, e):
  # let n, s, e be defined as in the problem statement.
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

        <p>So how do we know that this is optimal?  The "greedy stays ahead" approach to proof is to think about the other strategies we've tried so far; if we pick the earliest starting event, and the earliest ending event, the earliest ending event will always give us equal to or additional time to pick the next event.  If we pick the shortest event, versus the earliest ending event, we will still always be "free" again at an earlier point in time.</p>

  <p>Using the case by case approach, you can think of many different cases (e.g., two long events and a short one in the middle, one really long event and 3 events that happen during that one long event, etc.) and see that your greedy strategy works for each case, so it'll probably work for everything.</p>

        <p>Neither of these proving techniques are bullet-proof, so you'll have to practice in order to gain intuition on what would be an optimal solution. The good news is, if your greedy algorithm works, it's almost always fast enough to solve the problem in time, even for large input constraints.</p>
    </div>
    )
  }
}

export default Greedy;
