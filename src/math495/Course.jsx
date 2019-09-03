import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Course extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Course Materials</h1>
      <h3>Course Slides</h3>
        <a href="https://docs.google.com/presentation/d/1dnLAHWUWIjsXN5lN6KxpmIMUnLMjYevEPayIyigEo9w/edit?usp=sharing" target="_blank">Day 1: Syllabus and Slides</a>
      <h3>Problem Sets</h3>
        <a href="http://www.hackerrank.com/python-practice-1566475321" target="_blank">Problem Set 1: Python Practice</a>
      </div>
    )
  }
}

export default Course;
