# Insertion Sort

### Problem
Simple approach to sort an array ascending by insert elements to subarray is
ascending order.

### Pseudocode

1. Call insert to insert the element that starts at index 1 into the sorted
subarray in index 0.
2. Call insert to insert the element that starts at index 2 into the sorted
subarray in indices 0 through 1.
3. Call insert to insert the element that starts at index 3 into the sorted
subarray in indices 0 through 2.
4. ...
5. Finally, call insert to insert the element that starts at index n-1 n−1n,
minus, 1 into the sorted subarray in indices 0 through n-2 n−2n, minus, 2.
