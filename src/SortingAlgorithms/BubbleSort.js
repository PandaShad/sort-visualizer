export function getBubbleSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) {
        return array;
    }
    bubbleSortHelper(array, 0, array.length - 1, animations);
    return animations;

    // return classicBubbleSort(array);
}

function bubbleSortHelper(mainArray, startIdx, endIdx, animations) {
    if(startIdx === endIdx) {
        return;
    }
    doBubbleSort(mainArray, startIdx, endIdx, animations)
}

function doBubbleSort(mainArray, startIdx, endIdx, animations) {
    for(let i = endIdx; i >= 1; i--) {
        for(let j = startIdx; j < i; j++) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(mainArray[j+1] < mainArray[j]) {
                animations.push([[j, mainArray[j+1]], [j+1, mainArray[j]]]);
                // mainArray[k++] = auxArray[j+1];
                [mainArray[j], mainArray[j+1]] = [mainArray[j+1], mainArray[j]];
                // [array[j], array[j+1]] = [array[j+1], array[j]];
            }
            else {
                animations.push([[j, mainArray[j]], [j+1, mainArray[j+1]]]);
                [mainArray[j], mainArray[j+1]] = [mainArray[j], mainArray[j+1]];
            }
        }
    }
    console.log(mainArray);
}


// function classicBubbleSort(array) {
//     for(let i = (array.length-1); i >= 1; i--) {
//         for(let j = 0; j < i; j++) {
//             if(array[j+1] < array[j]) {
//                 [array[j], array[j+1]] = [array[j+1], array[j]];
//             }
//         }
//     }
//     return array
// }

// [3,6,2]

// animation = [] -> [[0,1],[0,1],[0,3]] -> [[0,1], [0,1], [0,3], [1,2], [1,2], [1,2]]

// [3,6,2] -> [3,6,2] -> [3, 2, 6]

// auxArray = [3,6,2]

// k = 0 -> 1 -> 2
// i = arr.length-1
// j = 0 -> 1



// function swap(array, first, second) {
//     var aux = array[first];
//     array[first] = array[second];
//     array[second] = aux;
// }