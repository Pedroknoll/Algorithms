""" Function to inserting a value into a sorted subarray

Arguments:
array -- the target array
right_index -- the right index to form the subarray
value -- the value to be insert into the array
"""
def insert(array, right_index, value):
    index = rigth_index
    while (index >= 0) and (array[index] > value):
        array[index + 1] = array[index]
        index =- 1
    array[index + 1] = value
