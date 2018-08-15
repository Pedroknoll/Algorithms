import unittest

# Do the loop as long as be possible the number is within the array.
def do_search(nums_array, target_num):
    min_index = 0;
    max_index = len(nums_array) - 1

    while min_index <= max_index:
        nums_array = sorted(nums_array) # order the array
        guess_index = round((min_index + max_index)/2)
        if nums_array[guess_index] == target_num:
            return guess_index
        elif nums_array[guess_index] < target_num:
            min_index = guess_index + 1
        else:
            max_index = guess_index - 1
    return -1

# Test Cases
class TestDoSearch(unittest.TestCase):

    def test_search_with_ordered_array(self):
        ordered_array = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
        search = do_search(ordered_array, 13)
        self.assertEqual(search, 5)

    def test_search_with_unordered_array(self):
        unordered_array = [13,2,3,5,7,11,17,19,23,29,31,37,41,43,47]
        search = do_search(unordered_array, 13)
        self.assertEqual(search,5)

    def test_search_with_invalid_target_num(self):
        prime_nums = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
        search = do_search(prime_nums, 12)
        self.assertEqual(search, -1)

if __name__ == '__main__':
    unittest.main()
