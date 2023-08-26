function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted or has one element
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let i = 0, j = 0;
    const merged = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    return merged.concat(left.slice(i), right.slice(j));
}


describe('Merge Sort', () => {
    it('should sort an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    it('should sort an array with one element', () => {
        expect(mergeSort([5])).toEqual([5]);
    });

    it('should sort a small array', () => {
        expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
    });

    it('should sort a large array', () => {
        const unsortedArray = [29, 10, 14, 37, 13, 8, 23, 40, 6, 44];
        const sortedArray = [6, 8, 10, 13, 14, 23, 29, 37, 40, 44];
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });

    it('should handle duplicate values', () => {
        const unsortedArray = [10, 5, 8, 10, 2, 5, 3];
        const sortedArray = [2, 3, 5, 5, 8, 10, 10];
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });

    it('should handle a large sorted array', () => {
        const sortedArray = Array.from({ length: 1000 }, (_, index) => index);
        expect(mergeSort(sortedArray)).toEqual(sortedArray);
    });

    it('should handle a large reversed array', () => {
        const reversedArray = Array.from({ length: 1000 }, (_, index) => 999 - index);
        const sortedArray = Array.from({ length: 1000 }, (_, index) => index);
        expect(mergeSort(reversedArray)).toEqual(sortedArray);
    });
});