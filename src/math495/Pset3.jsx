import React, { Component } from 'react';
import Code from './PythonCodeBlock.jsx';

class Pset3 extends Component {
  render () {
    const { style_classes } = this.props

    return (
      <div style={style_classes.article}>
      <h1>Problem Set 3 Solutions</h1>

        <h3>Super Reduced Stirng</h3>
<Code>
{`def superReducedString(s):
    i = 1
    while i < len(s):
        if s[i] == s[i - 1]:
            s = s[0:i - 1] + s[i + 1:]
            i = 1
            continue
        i += 1
    return s if len(s) != 0 else "Empty String"`}
</Code>
        <h3>Caeser Cipher</h3>
<Code>
  {`def rotate(c, k):
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    L = len(lower)
    if c in lower:
        return lower[(lower.index(c) + k) % L]
    elif c in upper:
        return upper[(upper.index(c) + k) % L]
    return c`}
</Code>
        <h3>Two Characters</h3>
<Code>
{`def it_alternates(s):
    for k in range(1, len(s)):
        if s[k] == s[k - 1]:
            return False
    return True

def alternate(s):
    lower = string.ascii_lowercase
    N = 0
    for i in range(len(lower)):
        for j in range(i + 1, len(lower)):
            c1 = lower[i]
            c2 = lower[j]
            filtered_string = [c for c in s if c == c1 or c == c2]

            # Check if filtered_string alternates:
            if it_alternates(filtered_string):
                N = max(N, len(filtered_string))

    return N if N != 1 else 0`}
</Code>
        <h3>Anagram</h3>
<Code>
{`def anagram(s):
    # if the string is not even length, return -1
    if len(s) % 2 != 0:
        return -1

    # Cut string in half
    a = list(s[0:len(s) // 2])
    b = list(s[len(s) // 2:])

    i = 0
    # iterate through one of the strings and if it is in the other, remove from both
    while i < len(a):
        if a[i] in b:
            b.remove(a[i])
            a.remove(a[i])
            continue
        i += 1

    # return characters that didn't match
    return len(a)`}
</Code>
        <h3>Sherlock and the Valid String</h3>
        <p>It's not the most efficient solution, but I just tried removing each letter of the alphabet (26 of them)</p>
<Code>
  {`def isValid(s):
    c = Counter(list(s))
    vals = list(sorted(c.values()))
    if all([v == 0 or v == max(vals) for v in vals]):
        return "YES"

    # max number of frequencies is 26: why not decrease each freq and see if it passes?
    for i in range(len(vals)):
        vals[i] -= 1
        max_val = max(vals)
        if all([v == 0 or v == max_val for v in vals]):
            return "YES"
        vals[i] += 1
    return "NO"`}
</Code>
        <h3>Bear and the Steady Gene</h3>
        <p>This one was the trickiest of the set.  Basically you keep a sliding, potentially expanding "window" across the string, and while it doesn't contain the extra letters, expand it.  If it does contain the letters that you want to remove, you decrease it from the left.  Keeping track of the sliding windows, you can find the solution by making 2 passes through the list (one pass on the right hand and one pass on the left hand)</p>
<Code>
{`def steadyGene(gene):
    # Figure out how many letters EXTRA we have
    target_n = len(gene) // 4
    freqs = Counter(gene)
    letters = ["A", "C", "T", "G"]
    targets = [freqs[l] - target_n for l in letters]
    freqs = { letters[i] : targets[i] for i in range(len(letters)) if targets[i] > 0 }
    # freqs now contains e.g. { "A": 3} if we have 3 extra As.

    # Let's look for substrings that contain 3 extra As, for example
    j = 0
    m = len(gene)
    lettersToRemove = freqs.keys()
    F = { l : 0 for l in letters }
    for i in range(len(gene)):
        while any([F[l] < freqs[l] for l in lettersToRemove]):
            # Add letters on the right until we have 3 extra As
            if j + 1 == len(gene):
                # If we run out of letters to add, return the best length we've found
                return m

            F[gene[j]] += 1
            j += 1

        # We now know this substring from i to j could be replaced to make it steady
        # So this is a potential answer - keep it if it's better than what we've found so far.
        m = max(0, min(m, j - i))

        # Now remove a letter on the left
        F[gene[i]] -= 1

    return m`}
</Code>
      </div>
    )
  }
}

export default Pset3;
