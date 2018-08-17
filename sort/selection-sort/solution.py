import unittest

def swap_elements(array, first_index, second_index):
    """Swaps the positions between elements of a given array

    Arguments:
    array -- the target array
    first_index -- the first element index to swap
    second_index -- the second element index to swap
    """
    temp = array[first_index]
    array[first_index] = array[second_index]
    array[second_index] = temp
    return array


def min_value_index(array, start_index):
    """Return the index of the minimum value into a subarray

    Arguments:
    array -- the target array
    start_index -- the first index of the subarray
    """
    min_index = start_index
    min_value = array[start_index]

    next_index = min_index + 1
    while next_index < len(array):
        if array[next_index] < min_value:
            min_index = next_index
            min_value = array[next_index]
        next_index += 1
    return min_index


def sort_selection(array):
    """Return the array ascending ordered """
    current_index = 0;
    while current_index < len(array):
        min_index = min_value_index(array, current_index)
        swap_elements(array, current_index, min_index)
        current_index += 1
    return array



class TestSwapElement(unittest.TestCase):

    def test_swap_elements_in_array(self):
        test_array = [10,3,2,6]
        swaped_array = swap_elements(test_array,0, 1)
        self.assertEqual(swaped_array, [3,10,2,6])

    def test_min_value_index_in_subarray(self):
        test_array = [10,3,6,20,1]
        index = min_value_index(test_array,0)
        self.assertEqual(index,4)

    def test_sort_selection(self):
        test_array = [10, 3, 6, 20, 1]
        sorted_array = sort_selection(test_array)
        self.assertEqual(sorted_array,[1,3,6,10,20])

if __name__ == '__main__':
    unittest.main()
