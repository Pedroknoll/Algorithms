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


### Asymptotic running-time analysis
Insertion sort loops over the indices of the array. It just calls insert on the
elements at indices **1, 2, 3, ..., n-1**.
To sum up the running times for insertion sort:

* Worst case: **_Θ(n^2)_** (in case that every element is greater than the
  last one)
* Best case: **_Θ(n)_** (in case that every element is ordered and smaller
  than the last one)
* Average case for a random array:  **_Θ(n^2)_**
* "Almost sorted" case: **_Θ(n)_**

If you had to make a blanket statement that applies to all cases of insertion
sort, you would have to say that it runs in **O(n^2)**.
