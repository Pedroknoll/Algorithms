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
