export function getQuickSortAnimations(array) {
    const animations = [];
    // const pivotAnimations = [];
    if(array.length <= 1) {
        return array;
    }
    quickSortHelpers(array, 0, array.length - 1, animations);
    return animations;

    // return basicQuickSort(array, 0, array.length-1);
}

function quickSortHelpers(mainArray, startIdx, endIdx, animations) {
    if(startIdx === endIdx) {
        return;
    }
    doQuickSort(mainArray, startIdx, endIdx, animations)
}

function doQuickSort(mainArray, startIdx, endIdx, animations) {
    if(startIdx === endIdx) {
        return;
    }
    else if(startIdx < endIdx) {
        let p = partition(mainArray, startIdx, endIdx, animations);
        doQuickSort(mainArray, startIdx, p-1, animations);
        doQuickSort(mainArray, p+1, endIdx, animations);
    }
}

// function basicQuickSort(array, first, last) {
//     if(first < last) {

//         let p = partition(array, first, last); // Pivot Index
//         basicQuickSort(array, first, p-1); //Left side of Pivot
//         basicQuickSort(array, p+1, last); //Right side of Pivot
//     }
//     return array;
// }

function partition(mainArray, first, last, animations) {
    const pivot = mainArray[last]; // last as pivot
    // pivotAnimations.push([last]); // We stock pivot's index to change his color
    let i = first - 1;
    for(let j = first; j <= last-1; j++) {
        if(mainArray[j] <= pivot) {
            i++;
            animations.push([i, j, last]);
            animations.push([i, j, last]);
            animations.push([[i, mainArray[j]], [j, mainArray[i]]]);
            [mainArray[i], mainArray[j]] = [mainArray[j], mainArray[i]];
        }
    }
    // pivotAnimations.push([last]);
    animations.push([i+1, last, last]);
    animations.push([i+1, last, last]);
    animations.push([[i+1, mainArray[last]], [last, mainArray[i+1]]]);
    [mainArray[i+1], mainArray[last]] = [mainArray[last], mainArray[i+1]]; // we swap pivot to its place
    return i+1;
}