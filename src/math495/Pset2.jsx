import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset2 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 2 Solutions</h1>

        <h3>Balanced Brackets</h3>
<Code>
{`def is_match(a, b):
    return a == "{" and b == "}" or
           a == "(" and b == ")" or
           a == "[" and b == "]"

def isBalanced(s):
    stack = []
    for i in range(len(s)):
        # Don't forget to check if the stack length is greater than 0
        # Indexing at -1 gives the last element
        if len(stack) > 0 and is_match(stack[-1], s[i]):
            stack.pop()
        else:
            stack.append(s[i])
    return "YES" if len(stack) == 0 else "NO"`}
</Code>
        <h3>Jesse and Cookies</h3>
<Code>
{`import heapq
def cookies(k, A):
    # If we have less than two cookies and our first is not sweet enough, return -1
    if len(A) < 2 and A[0] < k:
        return -1

    heapq.heapify(A)
    num_mixes = 0
    lowest_cookie = heapq.heappop(A)

    while lowest_cookie < k:
        if len(A) < 1:
            # If we have no more cookies to combine with, return -1
            return -1

        next_cookie = heapq.heappop(A)
        mixed_cookie = lowest_cookie + (2 * next_cookie)
        heapq.heappush(A, mixed_cookie)
        lowest_cookie = heapq.heappop(A)
        num_mixes += 1

    return num_mixes`}
</Code>
        <h3>QHEAP1</h3>
        <p>I was hoping this question would be solvable with just heapq, but it requires you to delete an element from the heap, and deleting a specific element from the heap is O(n) so you need to either define some fancy new heap operation in O(log(n)), or you can use a set.  Either way, I added Jesse and Cookies as a substitute question for this.</p>
        <h3>Sparse Arrays</h3>
        <p>This one is doable in O(n^2) time.</p>
<Code>
{`def matchingStrings(strings, queries):
    ls = [0] * len(queries)
    for i in range(len(queries)):
        for s in strings:
            if queries[i] == s:
                ls[i] += 1
    return ls`}
</Code>
        <h3>Equal Stacks</h3>
        <p>There are several ways to approach this problem - I took note of the minimum height, then removed blocks from the other stacks until they were of a smaller height than the minimum, then set a new minimum and repeat.  Note that I did <i>modify</i> the definition of the function so that it accepts stacks and a </p>
<Code>
{`def equalStacks(h1, h2, h3):
    heights = [sum(h1), sum(h2), sum(h3)]
    stacks = [h1, h2, h3]

    # heights is the total height of each stack
    # stacks is basically the input with all the blocks
    # I combined them so that I can iterate through them later.

    ixes = [0, 0, 0]
    smallest_height = min(heights)

    # While any of the heights is higher than the smallest, we know we have to remove some blocks
    while any([h != smallest_height for h in heights]):

        for i in range(len(heights)):
            # For each of the stacks, remove blocks off the top until it's equal to or smaller than the smallest height
            while heights[i] > smallest_height:
                heights[i] -= stacks[i][ixes[i]]
                ixes[i] += 1

        # recalculate new smallest height
        smallest_height = min(heights)

    return smallest_height`}
</Code>
        <h3>Reverse a Linked List</h3>
        <p>This is a classic interview question.  It doesn't require much code, but you do have to trace out exactly how all the parts are moving around.</p>
<Code>
{`def reverse(head):
    prev = None

    while True:
        tmp_next = head.next
        head.next = prev
        prev = head
        head = tmp_next

        if head is None:
            break
    return prev`}
</Code>
        <h3>No Prefix Set</h3>
        <p>The difficulty with this one is 1) creating a trie, and 2) checking BOTH conditions: one that if you put in a big word like dhaijw and then a small word like d, you will detect that d is a prefix of dhaijw; the other condition is that if you put d and then dhaijw, you will detect that dhaijw has the prefix d in it.</p>
<Code>
{`class Trie:
    def __init__(self):
        self.root = Node()

    def add(self, word):
        return self.root.add(word)

class Node:
    def __init__(self):
        self.children = {}
        self.freq = 0

    # My add function returns false if bad set
    def add(self, word):
        if self.freq != 0:
            # This means some other word is the prefix of this current word
            return False

        if len(word) == 0:
            if len(self.children) != 0:
                # This means that this current word is the prefix of some other word
                return False
            self.freq += 1
            return True
        else:
            if word[0] not in self.children:
                self.children[word[0]] = Node()
            return self.children[word[0]].add(word[1:])

N = int(input())
T = Trie()
for i in range(N):
    w = input()
    if not T.add(w):
        print("BAD SET")
        print(w)
        break
else:
    print("GOOD SET")`}
</Code>
      </div>
    )
  }
}

export default Pset2;
