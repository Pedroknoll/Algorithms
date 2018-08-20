# Selection Sort

### Problem
Simple approach to sort an array ascending by swaping the smallest elements
into the array.

### Pseudocode

1. Find the smallest card. Swap it with the first card.
2. Find the second-smallest card. Swap it with the second card.
3. Find the third-smallest card. Swap it with the third card.
4. Repeat finding the next-smallest card, and swapping it into the
correct position until the array is sorted.

### Asymptotic running-time analysis
The total running time for selection sort has three parts:
1. The running time for all the calls to minValueIndex / min_value_index.
2. The running time for all the calls to swapElements / swap_elements.
3. The running time for the rest of the loop in the selectionSort / selection_sort

Parts 2 and 3 are easy. We know that there are **_n_** calls to swap, and each
call takes constant time. Using our asymptotic notation, the time for all calls
to swap is **_Θ(n)_**. The rest of the loop in **selectionSort / selection_sort**
is really just testing and incrementing the loop variable and calling
**minValueIndex / min_value_index** and **swapElements / swap_elements**, and
so that takes constant time for each of the n iterations, for another **_Θ(n)_**
time.
For part 1, the running time for all the calls to **minValueIndex / min_value_index**,
we've already done the hard part. Each individual iteration of the loop in
**minValueIndex / min_value_index** takes constant time. The number of
iterations of this loop is **_n_** in the first call, then **_n-1_**, then
**_n-2_** , and so on. We've seen that this sum, **1 + 2 + ... + (n-1) + n** is
an arithmetic series, and it evaluates to **(n+1)(n/2) or n^2/2 + n/2**.
Therefore, the total time for all calls to **minValueIndex / min_value_index**
is some constant times **n^2/2 + n/2**.
In terms of **_big-Θ_** notation, we don't care about that constant factor, nor
 do we care about the factor of 1/2 or the low-order term. The result is that
 the running time for all the calls to **minValueIndex / min_value_index** is
 **_Θ(n^2)_**.
Adding up the running times for the three parts, we have **_Θ(n^2)_** for the
calls to **minValueIndex / min_value_index**, **_Θ(n)_** for the calls to
**swapElements / swap_elements**, and **_Θ(n)_** for the calls to
 **selectionSort / selection_sort**. The **_Θ(n^2)_** term is the most
 significant, and so we say that the running time of selection sort
 is **_Θ(n^2)_**.
