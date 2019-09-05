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
      <h3>Problem Sets</h3>
        <a href="http://www.hackerrank.com/python-practice-1566475321" target="_blank">Problem Set 1: Python Practice</a>
        <br />
        <a href="http://www.hackerrank.com/math-495r-09-data-structures" target="_blank">Problem Set 2: Data Structures</a>
      </div>
    )
  }
}

export default Course;