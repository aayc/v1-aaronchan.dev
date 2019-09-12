import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset2 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 1 Solutions</h1>

        <h3>Python If-Else</h3>
<Code>
{`if __name__ == '__main__':
    n = int(raw_input().strip())
    if n % 2 != 0:
        print("Weird")
    else:
        if 2 <= n <= 5:
            print("Not Weird")
        elif 6 <= n <= 20:
            print("Weird")
        elif n > 20:
            print("Not Weird")`}
</Code>
        <h3>Arithmetic Operators</h3>
<Code>
{`if __name__ == '__main__':
    a = int(raw_input())
    b = int(raw_input())
    print(a + b)
    print(a - b)
    print(a * b)`}
</Code>
        <h3>Loops</h3>
<Code>
{`if __name__ == '__main__':
    n = int(raw_input())
    for i in range(n):
        print(i*i)`}
</Code>
        <h3>String Split and Join</h3>
<Code>
{`def split_and_join(line):
    return "-".join(line.split(" "))`}
</Code>
        <h3>Find the Runner-up Score!</h3>
<Code>
{`if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

    # We are guaranteed to have at least 2 elements

    # Sort the array
    sorted_arr = sorted(arr, reverse=True)

    # Use the next function to get the first encountered value in the list that doesn't match element at index 0
    print(next(m for m in sorted_arr if m != sorted_arr[0]))`}
</Code>
        <h3>Find a string</h3>
<Code>
{`def count_substring(string, sub_string):
    sub_len = len(sub_string)
    occurrences = 0
    for i in range(len(string)):
        if string[i:i + sub_len] == sub_string:
            occurrences += 1
    return occurrences`}
</Code>
        <h3>collections.Counter()</h3>
<Code>
{`from collections import Counter

n_shoes = int(input())
shoes = Counter([int(x) for x in input().split(" ")])
n = int(input())
total_money = 0
for i in range(n):
    shoe, money = [int(x) for x in input().split(" ")]
    if shoes[shoe] > 0:
        shoes[shoe] -= 1
        total_money += money
print(total_money)`}
</Code>
        <h3>Integers Come in All Sizes</h3>
<Code>
{`from collections import Counter

n_shoes = int(input())
shoes = Counter([int(x) for x in input().split(" ")])
n = int(input())
total_money = 0
for i in range(n):
    shoe, money = [int(x) for x in input().split(" ")]
    if shoes[shoe] > 0:
        shoes[shoe] -= 1
        total_money += money
print(total_money)`}
</Code>
        <h3>Lists</h3>
<Code>
{`if __name__ == '__main__':
    N = int(input())
    ls = []
    for i in range(N):
        cmd = input().split(" ")
        if cmd[0] == "insert":
            pos = int(cmd[1])
            ls.insert(pos, int(cmd[2]))
        elif cmd[0] == "print":
            print(ls)
        elif cmd[0] == "remove":
            ls.remove(int(cmd[1]))
        elif cmd[0] == "append":
            ls.append(int(cmd[1]))
        elif cmd[0] == "sort":
            ls = sorted(ls)
        elif cmd[0] == "pop":
            ls.pop()
        elif cmd[0] == "reverse":
            ls = ls[::-1]`}
</Code>
      </div>
    )
  }
}

export default Pset2;
