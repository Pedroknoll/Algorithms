import unittest

""" Function to insert a value into a subarray so that it is sorted

Arguments:
array -- the target array
right_index -- the right index to form the subarray
value -- the value to be insert into the array
"""
def insert(array, right_index, value):
    index = right_index
    while (index >= 0) and (array[index] > value):
        if index == len(array) - 1:
            array.append(array[index])
        else:
            array[index + 1] = array[index]
        index -= 1
    array[index + 1] = value
    return array


class TestInsertSort(unittest.TestCase):

    def test_insert_with_valid_params(self):
        test_array = [0,3,4]
        sorted_array = insert(test_array,2, 1)
        self.assertEqual(sorted_array,[0,1,3,4])

if __name__ == '__main__':
    unittest.main()
