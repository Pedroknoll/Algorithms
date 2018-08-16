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
