import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Blitz1 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Blitz 1 Solutions</h1>

        <h3>Separate the Numbers</h3>
        <p>This problem could be solved by testing each prefix of the string and then iterating through the rest of the string to see if the subsequent numbers are found in order.  You can reason out that this is the best way to solve it because the input constraints are that the length of the string will be at most a paltry 32 characters long.</p>
<Code>
{`def separateNumbers(s):
    # If we start with 0, exit immediately because it's impossible
    if s.startswith("0"):
        print("NO")
        return
    
    # Let's try starting with every possible start number (1 <= |s| <= 32)
    # so O(n^2) is totally doable
    for i in range(1, len(s)):
        start_n = int(s[0:i]) # The number we start with
        next_number = str(start_n + 1) # The next number we're looking for
        rest = s[i:] # The rest of the input string

        # While the rest of the input string starts with the number we're looking for..
        while rest.startswith(next_number):
            # Remove the next number
            rest = rest[len(next_number):]
            # Increment the number we're looking for
            next_number = str(int(next_number) + 1)
        
        # If there's no more input string left, then we were successful.
        if len(rest) == 0:
            print("YES", start_n)
            return

    # If we never returned "YES", that means it's a "NO"
    print("NO")`}
</Code>
        <h3>Pairs</h3>
        <p>Just like we saw in class, we could solve this in O(n^2) but it times out on some test cases.  Instead, we need to use data structures to optimize repeated look-up operations.</p>
<Code>
{`def pairs(k, arr):
    n = 0
    S = set(arr)

    # Just like in class, using two loops will be too slow here.
    # By using a set and searching for arr[i] - k (the other half of the pair),
    # our algorithm becomes time complexity O(n)
    for i in range(len(arr)):
        if arr[i] - k in S:
            n += 1

    # Could also write this:
    # sum([a - k in S for a in arr]) because True evaluates to 1 in Python 3.
    return n`}
</Code>
        <h3>Sherlock and Anagrams</h3>
        <p>This problem was easy enough to implement but tough to reason about.  To enumerate all substrings, use two loops.  To check to see if strings a and b are anagrams, sort them and see if they're the same.  The first insight was to sort them as you enumerated them.  The second insight was that if you sort them, then all anagrams end up being the same so you can take the frequency.  The last insight is that you can use the frequencies to calculate n*(n-1)/2 pairs per frequency.  If you used a double loop for the second part, you were very close but you would still time out on some test cases.</p>
<Code>
{`def sherlockAndAnagrams(s):
    # Analyzing time complexity for this one is tricky.  With 100 length string, 
    # you have 100(100 - 1) / 2 substrings, which is roughly 5000, but it's safe margin to say 10,000
    
    # This algorithm sorts (nlog(n)), 10,000 times, which is still okay
    # Then analytically calculate how many pairs match for each anagram
    # which if you devise the formula, it's (n*(n - 1)) / 2

    # I got this by first trying a double for loop and it was too slow, but
    # I realized that for(i in range(len(S))) and for(j in range(i + 1, len(S))
    # executes len(S) * (len(S) - 1) // 2 times, so I used a Counter instead
    # and used the values of each type of anagram to compute directly in O(n)
    
    # Get all pairs of strings
    subs = []
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            subs.append("".join(sorted(s[i:j])))

    # Tally up the frequencies of the anagrams
    n_per_anagram = Counter(subs).values()
    n = 0
    for v in n_per_anagram:
        # Avoid using two loops by analytically calculating
        n += v * (v - 1) // 2 
    return n`}
</Code>
        <h3>Hackerland Radio Transmitters</h3>
        <p>This problem was easy to reason about but tough to implement.  Basically, you want to find the first uncovered house, then find the furthest house covered by the transmitter but still covering the first house, and place the transmitter at the second house.  Then repeat.</p>
<Code>
{`def hackerlandRadioTransmitters(x, k):
    low = min(x) # leftmost house
    high = max(x) # rightmost house
    houses = set(x) # create a set for speed of lookup

    # Strategy: put the first transmitter on a house that will barely
    # reach the leftmost house, then find the next house that is unconvered
    # and put the next transmitter such that it barely reaches that house
    # etc.
    i = low
    transmitters = 0
    while i < high + 1:
        # walk one step at a time until we find a house that is uncovered
        if i in houses:
            # if we found one, walk k steps, then walk backwards to find
            # a house
            for j in range(i + k, i, -1):
                if j in houses:
                    # when a house is found, put a transmitter on it
                    # and walk k steps forward (to the next area not covered)
                    transmitters += 1
                    i = j + k
                    break
            else:
                # when a next house is not found, just put it on the original house.
                transmitters += 1
                i += k

        i += 1
        
    return transmitters`}
</Code>
        
      </div>
    )
  }
}

export default Blitz1;
