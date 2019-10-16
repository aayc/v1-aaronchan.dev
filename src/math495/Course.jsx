import React, { Component } from 'react';

class Course extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Course Materials</h1>
      <h3>Course Slides</h3>
        <a href="https://docs.google.com/presentation/d/1dnLAHWUWIjsXN5lN6KxpmIMUnLMjYevEPayIyigEo9w/edit?usp=sharing" target="_blank">Day 1: Syllabus and Slides</a>
        <br/>
        <a href="https://docs.google.com/presentation/d/1_wDI0PU3jm5vl5DDPKYlCY7kqkERC0uU1mO3H7_IJx4/edit?usp=sharing" target="_blank">Day 2: Common Data Structures</a>
        <br/>
        <a href="https://docs.google.com/presentation/d/1Shoeu39jQSdRw8boOOWbofw74VcqXPPvnzMZbsePj7M/edit?usp=sharing" target="_blank">Day 3: Review of Data Structures + Heap + Trie</a>
        <br />
        <a href="https://docs.google.com/presentation/d/1034NwGpbmRc4T0pLiGOFaxN9vzMrWwJp4H6jl_H4n_8/edit?usp=sharing" target="_blank">Day 5: Strings</a>
        <br />
        <a href="https://docs.google.com/presentation/d/1lCJBaz8Kw2RVqD-5WPsfOxyjcWc2xUopeds2S6NkRP4/edit?usp=sharing" target="_blank">Day 6: Interview Prep</a>
        <br />
        <a href="https://docs.google.com/presentation/d/1VwNw_EOtMMEsmSsmU1nIwNLS0mLjQXRTiBrzF43y-w8/edit?usp=sharing" target="_blank">Day 7: Problem Practice</a>
        <br />
        <a href="https://docs.google.com/presentation/d/1vnMHejYCVtl-x20mMFjqb9N3YhKdVCFMkA7ZVeyG4bY/edit?usp=sharing" target="_blank">Day 8: Brute Force</a>
        <br />
        <a href="https://docs.google.com/presentation/d/1_Q-Z6eo63dv-fBzbZMSZ8YRNIQSPIQSRYiLBP6CHGX0/edit?usp=sharing" target="_blank">Day 11: Recursion</a>
      <h3>Problem Sets</h3>
        <a href="http://www.hackerrank.com/python-practice-1566475321" target="_blank">Problem Set 1: Python Practice</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-data-structures" target="_blank">Problem Set 2: Data Structures</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-strings" target="_blank">Problem Set 3: Strings</a>
        <br />
        <a href="https://www.hackerrank.com/math-495r-09-brute-force" target="_blank">Problem Set 4: Brute Force</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-greedy" target="_blank">Problem Set 5: Greedy</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-blitz-2" target="_blank">Blitz 2</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-recursion" target="_blank">Problem Set 6: Recursion</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-graph" target="_blank">Problem Set 7: Graph</a>
      </div>
    )
  }
}

export default Course;
