export function getInsertionSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) {
        return array;
    }
    insertionSortHelpers(array, 1, array.length - 1, animations);
    return animations;

    // return basicInsertionSort(array);
}

function insertionSortHelpers(mainArray, startIdx, endIdx, animations) {
    if(startIdx === endIdx) {
        return;
    }
    doInsertionSort(mainArray, startIdx, endIdx, animations)
}

function doInsertionSort(mainArray, startIdx, endIdx, animations) {
    for(let i = startIdx; i <= endIdx; i++) {
        const element = mainArray[i];
        let j = i;
        while (j > 0) {
            if (mainArray[j-1] > element) {
                animations.push([j, j-1]);
                animations.push([j, j-1]);
                animations.push([[j, mainArray[j-1]], [j-1, element]]);
                mainArray[j] = mainArray[j-1];
                j--;
            }
            else {
                animations.push([j, j-1]);
                animations.push([j, j-1]);
                animations.push([[j, element], [j-1, mainArray[j-1]]]);
                break;
            }
        }
        mainArray[j] = element;
    }
    console.log(mainArray)
}

// function basicInsertionSort(array) {
//     for(let i = 1; i < array.length; i++) {
//         const element = array[i];
//         let j = i;
//         while ( j > 0 && array[j-1] > element) {
//             array[j] = array[j-1];
//             j--;
//         }
//         array[j] = element;
//     }
//     return array;
// }