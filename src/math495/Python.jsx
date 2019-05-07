import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Python extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Python in a Nutshell</h1>
      <h4>buckle up</h4>
      <p>Python was created by Guido van Rossum, and is a general purpose programming language used in (no particular order): <u>server-side programming</u> (Django, Flask), <u>data science</u> (anaconda, matplotlib, tensorflow/sklearn/pandas/..), <u>desktop software</u> (pyqt, kiwi), <u>games</u> (particularly for mod scripting) and more.</p>
      <p>It is interpreted, strongly typed (things have types under the hood), dynamically typed (you don't explicitly declare types), garbage-collected, and object oriented (class support, everything is an object).</p>
      <p>Python 3 is the only Python you need to know; Python 2 will no longer be maintained past 2020.</p>
      <h3>Strengths and Weaknesses of Python</h3>
      <p>Python is very good for prototyping because it is built to resemble pseudocode and it has a vast set of libraries available for use, in addition to a nice package manager called pip that makes installing libraries easy.  It is fast enough for most applications, especially prototypes.  Because Python is interpreted, it can run cross-platform (Windows, Mac, Linux systems).  It's also free and <a target="_blank" href="https://github.com/python/cpython">open source</a>.</p>

      <p>Unfortunately, Python's main weaknesses are its speed and memory consumption.  Because it is interpreted, it is usually an order of magnitude behind C and half of one behind Java, and consumes significantly more memory.  One of the controversial topics regarding Python's performance is the Global Interpreter Lock (GIL), which prevents multiple threads from executing Python simultaneously.  The GIL is literally a mutex in the C implementation of Python.  However, several types of operations such as I/O, image processing and numpy occur outside of the GIL.  Python can also be multiprocess, but processes are significantly heavier than threads.  If you're wondering, people have tried to rewrite Python to be multithreaded but every attempt has resulted in slower single threaded performance overall.</p>

      <p>SOMETHING ABOUT DUNDER, CONVENTION STYLE</p>

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
      <p>Characters of strings can be accessed just like elements of lists are accessed, but strings are immutable in Python (cannot be changed, you have to make a new string instead).  If you need to change characters, you can call list() on a string to turn it into a list, then modify it.</p>
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
      
      
  {/*<h3>Intermediate: Generators</h3>

      <h3>Intermediate: Lambda expressions</h3>
      <p>Python supports anonymous functions which can be written as lambda expressions.  These are particularly useful when used with <u>higher order functions</u>, or functions that take other functions as input.  Three well-known examples are <tt>map</tt>, <tt>filter</tt> and <tt>reduce</tt>.</p>
      <p><tt>map</tt> takes a function and a list, applies the function to every element in the list, then returns the resulting list.</p>

      <p>Code block</p>

      <p><tt>filter</tt> takes a function and a list, applies the function to each element in the list and discards the element if the function returns False, otherwise keeps it.</p>

      <p>code block</p>

      <p><tt>reduce</tt> takes a function and a list, and 

      <p>Clean and necessary uses of lambda expressions are semi-rare because list comprehensions do the same thing (except for <tt>reduce</tt>.</p>
      <h3>Advanced: Decorators</h3>*/}
      </div>
    )
  }
}

export default Python;
