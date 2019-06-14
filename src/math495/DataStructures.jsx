import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class DataStructures extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Data Structures</h1>

      <p>Data structures are formats to organize and store data, and they can result in some big speedups if you know how you need to retrieve data, or storing data in a certain way will make solving the problem easy.  Let's go over some of the built-in data structures in Python that are useful and common:</p>

      <h3>Lists</h3>
      <p>Lists are the most frequently used data structure in Python.  They have essentially O(1) time for appending to the right and O(1) for access.  One of the tricky parts of using lists is indexing into them, which is shown below:</p>
      <Code>
{`l = [2, 4, 7, 8]
l.append(9)
l[1:3] # returns list [4, 7]; elements at indices 1, 2
l[2:] # returns [7, 8, 9]; elements at index 2 and onward
l[:3] # returns [2, 4, 7]; elements from beginning to index 3
l[:] # returns a copy of the list
l[::2] # returns [2, 7, 9] means 'by 2', skipping every other.
l[::-1] # returns a reversed copy of the list.`}
      </Code>
      <p>Keep in mind that inserting anywhere other than the right, as well as removing, is O(n) for lists.</p>

      <h3>Sets</h3>
      <p>Sets are useful because insertion/check if exists/delete are all O(1) with a Hash Set (the default set in Python).  They also will only have one of each item.  For example, this is how you can quickly remove duplicates of a list:</p>
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
      <p>Python's dictionaries (called "maps" in Java, C++, C#, etc.) store key, value pairs.  Internally, Python dictionaries are implemented as hash maps, so adding, checking if exists, removal, and get are all O(1).  Dictionaries are generally for storing unordered data.  Syntax for dictionaries in Python is intuitive:</p>
      <Code>
{`mydict = {} # initialization
mydict_fromlist = { "hello" + i: i for i in range(4) } # {'hello0': 0, 'hello1': 1, 'hello2': 2}
print("hello5" in mydict_fromlist) # Check if key exists: False
for k, v in mydict_fromlist.items():
  print(k, v) # iterates through and prints dictionary
min(mydict_fromlist, key=mydict_fromlist.get) # trick to get key of minimum value`}
      </Code>

      <h3>Search Trees (Binary, Red/Black)</h3>
      <p>Search trees are for storing ordered data, with O(log(n)) insert and removal complexities.  It's less likely that you'll find yourself using a search tree over other types of data structure listed in this article since Python lists/dictionaries are heavily optimized and will suffice for most problems you encounter.  Honestly, they're kind of a pain to implement on the fly, and Python doesn't have a built-in package for search trees.</p>

      <h3>Deques</h3>
      <p>If you find that you need to append to the left or pop from left a lot, use a deque.  Both of popping left and right, as well as insertion left and right, are O(1) with deques. In Python, deques are implemented as doubly linked lists.</p>
      <Code>
{`from collections import deque
deque.append(3)
deque.appendleft(2)
deque.popleft() # returns 2`}
      </Code>


      <h3>Priority Queues/Heaps</h3>
      <p>If there is some strategy to picking the <i>next</i> element to consider or explore, then embedding that strategy into a priority queue or heap can reduce O(n) retrieval time to O(log(n)) retrieval time.  Dijkstra's algorithm for shortest path, for example, without a priority queue is O(n^2), however with a priority queue it becomes O(nlog(n)).  A heap is a specific implementation of a priority queue, which is more of a general concept.  Python has a wonderful package built-in package called heapq which lets you use a set of functions to treat a list like a heap/priority queue. (search "list as heap data structure" to learn more about how).  Python's heapq is implemented as a min heap, so heappop returns the minimum element (organizing by first value in the tuple if elements are tuples).</p>
      <Code>
{`from heapq import heapify, heappop, heappush
ls = [1, 5, 22, 1]
heapify(ls) # ls is now [1, 1, 22, 5]
heappop(ls) # returns 1 in O(log(n)) time
heappush(ls, 7)
print(ls) # [1, 5, 22, 7] `}
      </Code>
      <p>As long as you continue to use the heap operations on the list, the list will behave as a heap.</p>

      </div>
    )
  }
}

export default DataStructures
