# pretty-ping
Pipe in ping in bash to see graphs instead of numbers.  Neat!

### usage

Seriously just pipe in the output from `ping`.
Pass `ping` whatever options or flags you want as long as they don't remove the `time=...` field from the output.

```
$ ping 8.8.8.8 | node index.js
PING 8.8.8.8 (8.8.8.8): 56 data bytes
18.9  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.6  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.5  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.6  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
24.7  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.1  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
23    ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.4  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.5  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.4  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
34.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.2  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
22.2  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18    ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
20    ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
84.6  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
75.9  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
80.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
72.9  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
65.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
19.5  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
19.5  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.5  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18    ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.6  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.5  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
20.7  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
30.8  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.9  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
26.9  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
30.7  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
17.3  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
18.2  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
20.1  ⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃⊃
```
