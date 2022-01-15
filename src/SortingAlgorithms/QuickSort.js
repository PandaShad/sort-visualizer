export function getQuickSortAnimations(array) {
    // const animations = [];
    // if(array.length <= 1) {
    //     return array;
    // }
    // bubbleSortHelper(array, 0, array.length - 1, animations);
    // return animations;

    return basicQuickSort(array, 0, array.length-1);
}

function basicQuickSort(array, first, last) {
    if(first < last) {
        let p = partition(array, first, last); // Pivot Index
        basicQuickSort(array, first, p-1); //Left side of Pivot
        basicQuickSort(array, p+1, last); //Right side of Pivot
    }
    return array;
}

function partition(array, first, last) {
    const pivot = array[last]; // last as pivot
    let i = first - 1;
    for(let j = first; j <= last-1; j++) {
        if(array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i+1], array[last]] = [array[last], array[i+1]];
    return i+1;
}