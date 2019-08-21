import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Python extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Python in a Nutshell</h1>
      <h4>buckle up</h4>
      <p>Python was created by Guido van Rossum, and is a general purpose programming language used in server-side programming, data science, desktop software, games and more.  It is interpreted, strongly typed, dynamically typed, garbage-collected, and object oriented.</p>

      <p>Python 3 is the only Python you need to know; Python 2 will no longer be maintained past 2020.</p>
      <h3>Strengths and Weaknesses of Python</h3>
      <p>Programmers like Python because it is/has:</p>
      <ul>
        <li>Easy to read</li>
        <li>Flexible syntax (the "len" function for determining length works on lists, sets, deques, strings, etc.)</li>
        <li>Large set of high quality packages that are easy to install using pip</li>
        <li>Quick for prototyping and scripting because it looks like pseudocode</li>
        <li>Not tied to a specific operating system or platform</li>
        <li>Free and <a target="_blank" rel="noreferrer noopener" href="https://github.com/python/cpython">open source</a></li>
      </ul>

      <p>That said, Python is not so good because it:</p>
      <ul>
        <li>Is considered 10x slower than C</li>
        <li>Cannot truly multithread (but can multiprocess, which are like heavier threads)</li>
        <li>Has code conventions can seem like magic (e.g., __init__ for classes) and must be memorized</li>
        <li>Uses dynamic typing, which makes code harder to maintain in large codebases</li>
      </ul>

      <p>In this class, we will not be covering architecting software with Python (e.g., virtual environments, pip, class organization).  Instead, we'll focus on what Python supports natively, and how it can be used to solve problems.</p>

      <h3>Syntax Crash Course</h3>
      <h5>variables</h5>
      <p>Since Python is dynamically typed, creating/initializing/setting variables is essentially like pseudocode:</p>
      <Code>
{`a = 3
b = True
c = False
d = (b or c) and b
print(d) # prints True`}
      </Code>

      <p>Notice that in Python we use <tt>True</tt>, <tt>False</tt>, <tt>and</tt>, <tt>or</tt> and null is <tt>None</tt></p>

      <h5>lists and indexing</h5>
      <p>Lists are very important in Python and can be created and accessed like this:</p>
      <Code>
{`my_list = [3, 5, "hi", False]
my_list[0:2] # 3, 5
my_list[1::] # grabs all 1 and later: [5, "hi", False]
my_list[1::2] # previous but skips every other: [5, False]
my_list[::-1] # reverses list, [False, "hi", 5, 3]
my_list[:] # copies every item: [3, 5, "hi", False] `}
      </Code>
      <p>String characters can be accessed just like list elements are accessed, but strings are immutable in Python (cannot be changed, you have to make a new string instead).  If you need to change characters, you can call list() on a string to turn it into a list, then modify it.</p>
      <p>There is a special type of list called a "tuple", which has the immutability of a string (there are perks to this, like being hashable) but allows for different types of items.  Tuple elements can be accessed just like list elements, but are created like this instead:</p>
      <Code>
{`a = (3, )
b = (4, 5)
c = a + b # (3, 4, 5)
d = (3, )
a == d # True
b[1] # 5`}
      </Code>
      <h5>control flow structures</h5>
      <p>Python's selection/repetition control flow structures (if, for, while, etc.) don't need parentheses around their conditions, and end with colons.  Python also abbreviates "else if" to "elif" and requires indentation instead of braces.</p>
      <Code>
{`if 3 == 4:
  print("3 is equal to 4")
elif 3 == 5:
  print("3 is equal to 5")
else:
  print("3 is not equal to 4 or 5")`}
      </Code>
      <p>for loop syntax is the equivalent of any other language's "for..in" loop, and iterating in a range is expressed as:</p>
      <Code>
{`for i in range(0, 3):
  print("hello", i)`}
      </Code>

      <h5>functions</h5>
      <p>Python functions have several convenient abilities, such as default arguments and multi-argument return:</p>
      <Code>
{`def add3to_n (n):
  return n + 3

def add3and4to_n (n = 5):
  return n + 3, n + 4

print(add3to_n(4)) # 7
print(add3and4to_n()) # uses default value 5, returns (8, 9)
print(add3and4to_n(10)[0]) # returns first argument, 13`}
      </Code>
      <p>Objects (maps, lists, sets, user-defined objects) will be modified if they're passed into a function and modified within the function.  This is one example where tuples can be handy, since they won't be modified (immutable!).</p>
      <Code>
{`def change_second_element (ls):
  ls[1] = 77
  return 4

a = [3, 4, 5]
result = change_second_element(a)
print(result, a) # 4 [3, 77, 5]`}
      </Code>
      <h3>Reading and Parsing Input</h3>
      <p>Reading input is easy with the input() function, which will wait until the user types a whole line and presses enter/return, then returns that whole line of input.  The following block of code shows reading in a list of numbers:</p>
      <Code>
{`# suppose the input is '3 4 7 8' without quotes
s = input() # gets next line
print(s) # "3 4 7 8"
print(s.split(" ")) # ["3", "4", "7", "8"]
print([int(x) for x in s.split(" ")]) # [3, 4, 7, 8]`}
      </Code>

      <h3>List Comprehensions</h3>
      <p>List comprehensions are an interesting intermediate-level feature of Python that allows you to build a list by combining an expression over a loop, optionally with a conditional statement.  Here are some examples:</p>
      <Code>
{`[x**2 for x in range(0, 10)] # [0, 1, 4, 9...]
[x for x in range(1, 200, 2) if x % 5 != 0] # [1, 3, 7, 9, 11...]
[[0 for col in grid[row]] for row in grid] # 2D array of 0s
[x*3 for x in [3, 90, 2]] # [9, 270, 6]`}
      </Code>
      <p>You can read it in order in English e.g.: "the list consisting of x in the range 1 to 200 by 2 if x is not divisible by 5."</p>

      <h3>Quiz Yourself</h3>
      <p>What are the key differences between lists and tuples in Python?</p>
      <p>Can you assign a variable "a" to a number, and then the next line assign it to a string?  Why or why not?</p>
      <p>Can Python functions return multiple values?</p>
      <p>What is the syntax for setting a default value in a Python function?</p>
      <p>What's the difference between () and (,) in Python?</p>
      
      <h3>Extra things you can look up</h3>
      <p>These are nice "syntactic sugar" that Python 3 supports that can come in handy.  They won't be necessary for this class though.</p>
      <ul>
        <li>for..else loop</li>
        <li>unpacking assignments</li>
        <li>with statements</li>
        <li>import aliasing</li>
        <li>generators</li>
        <li>decorators</li>
        <li>lambda expressions</li>
      </ul>
      
      
      </div>
    )
  }
}

export default Python;
