import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class DataStructures extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Data Structures</h1>

      <p>Data structures are formats to organize and store data, and they can result in some big speedups if you know how you need to retrieve data, or storing data in a certain way will make solving the problem easy.  Let's go over some of the most useful and common ones:</p>

      <h3>Lists</h3>

      <h3>Sets</h3>
      <p>Sets are useful because insertion/check if exists/delete are all O(1) with a Hash Set (the default set in Python).  They also will only have 1 of each item.  For example, this is how you can quickly remove duplicates of a list:</p>
      <Code>
{`list_with_dups = [3, 3, 5, 5, 6, 10, -3]
my_set = set(list_with_dups)
print(my_set) # prints {3, 5, 6, 10, -3}`}
      </Code>
      <p>You can also perform operations with sets like intersection and union.  You can even do a "set" comprehension:</p>
      <Code>
{`set1 = set([3, 4, 5])
set2 = set([5, 6, 7])
print(set1.intersection(set2)) # {5}
print(set2.union(set1)) # {3, 4, 5, 6, 7}
print({ a % 2 for a in range(0, 10) }) # {0, 1} shows that duplicates are removed`}
      </Code>

      <h3>Maps/Dictionaries</h3>
      <p>Python's dictionaries (called "maps" in Java, C++, C#, etc.) store key : value pairs.</p>

      <h3>Search Trees (Binary, Red/Black)</h3>

      <h3>Queues/Deques</h3>


      <h3>Priority Queues/Heaps</h3>

      <h3>Graphs</h3>

      <h3>Disjoint Sets</h3>

      </div>
    )
  }
}

export default DataStructures
