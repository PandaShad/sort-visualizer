export function getHeapSortAnimations(array) {
    return heapSort(array);
}

function buildMaxHeap(array) {
    let i = Math.floor((array.length / 2)-1);
    while(i > 0){
        heapify(array, i, array.length);
        i--;
    }
}

function heapify(heap, i, max) {
    let index;
    let leftChild;
    let rightChild; 
    while(i < max) {

        index = i;
        leftChild = 2*i+1;
        rightChild = leftChild+1;

        if(leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if(rightChild < max &&  heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        [heap[i], heap[index]] = [heap[index], heap[i]];

        i = index;

    }
}

function heapSort(array) {
    buildMaxHeap(array);
    lastElement = array.length-1;
    while(lastElement > 0) {
        [array[0], array[lastElement]] = [array[lastElement], array[0]];
        heapify(array, 0, lastElement);
        lastElement -= 1;
    }

    return array;
}

// function heapSort(array) {
//     for(let i = (array.length / 2)-1; i >= 1; i--) {
//         heapify(array, i, array.length);
//     }
//     for(let i = array.length-1; i >= 2; i--) {
//         [array[i], array[1]] = [array[1], array[i]];
//         heapify(array, 1, i-1);
//     }
// }

// function heapify(array, node, n) {
//     let k = node;
//     let j = 2*k;
//     while( k <= n) {
//         if(j < n && array[j] < array[j+1]) {
//             j++;
//         }
//         if(array[k] < array[j]) {
//             [array[k], array[j]] = [array[j], array[k]];
//             k = j; 
//             j = 2*k;
//         }
//         else {
//             j = n+1;
//         }
//     }
// }