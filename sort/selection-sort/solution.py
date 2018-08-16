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
    print(min_index)
    return min_index



class TestSwapElement(unittest.TestCase):

    def test_swap_elements_in_array(self):
        test_array = [10,3,2,6]
        swaped_array = swap_elements(test_array,0, 1)
        self.assertEqual(swaped_array, [3,10,2,6])


if __name__ == '__main__':
    unittest.main()
