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




class TestSwapElement(unittest.TestCase):

    def test_swap_elements_in_array(self):
        test_array = [10,3,2,6]
        swaped_array = swap_elements(test_array,0, 1)
        self.assertEqual(swaped_array, [3,10,2,6])


if __name__ == '__main__':
    unittest.main()
