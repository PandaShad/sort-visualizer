import React from 'react';
import './SortingVisualizer.css';
// import * as SortingAlgorithms from '../SortingAlgorithms/MergeSort.js';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js';
import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort.js';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort.js';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDismount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 800));
        }
        this.setState({array});
    }

    mergeSort() {
        // console.log(this.state.array);
        // const array = SortingAlgorithms.mergeSort(this.state.array);
        // console.log(array);
        // this.setState({array});

        // this.resetArray();

        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [firstIndex, secondIndex] = animations[i];
                const firstStyle = arrayBars[firstIndex].style;
                const secondStyle = arrayBars[secondIndex].style;
                const color = i % 3 === 0 ? 'red' : '#673ab7';
                setTimeout(() => {
                    firstStyle.backgroundColor = color;
                    secondStyle.backgroundColor = color;
                }, i * 10);
            }
            else {
                setTimeout(() => {
                    const [firstIndex, newHeight] = animations[i];
                    const firstStyle = arrayBars[firstIndex].style;
                    firstStyle.height = `${newHeight}px`
                }, i * 10)
            }
        }
        // setTimeout(() => {
        //     this.mergeSort();
        // }, 30000)
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [firstIndex, secondIndex] = animations[i];
                const firstStyle = arrayBars[firstIndex].style;
                const secondStyle = arrayBars[secondIndex].style;
                const color = i % 3 === 0 ? 'red' : '#673ab7';
                setTimeout(() => {
                    firstStyle.backgroundColor = color;
                    secondStyle.backgroundColor = color;
                }, i * 3)
            } 
            else {
                setTimeout(() => {
                    const [[firstIndex, newHeight], [secondIndex, newHeight2]] = animations[i];
                    const firstStyle = arrayBars[firstIndex].style;
                    const secondStyle = arrayBars[secondIndex].style;
                    firstStyle.height = `${newHeight}px`;
                    secondStyle.height = `${newHeight2}px`;
                }, i * 3)
            }
        }

        // const array = getBubbleSortAnimations(this.state.array);
        // console.log(array);
        // this.setState({array});
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [firstIndex, secondIndex] = animations[i];
                const firstStyle = arrayBars[firstIndex].style;
                const secondStyle = arrayBars[secondIndex].style;
                const color = i % 3 === 0 ? 'red' : '#673ab7';
                setTimeout(() => {
                    firstStyle.backgroundColor = color;
                    secondStyle.backgroundColor = color;
                }, i * 10)
            } 
            else {
                setTimeout(() => {
                    const [[firstIndex, newHeight], [secondIndex, newHeight2]] = animations[i];
                    const firstStyle = arrayBars[firstIndex].style;
                    const secondStyle = arrayBars[secondIndex].style;
                    firstStyle.height = `${newHeight}px`;
                    secondStyle.height = `${newHeight2}px`;
                }, i * 10)
            }
        }

        // const array = getInsertionSortAnimations(this.state.array);
        // console.log(array);
        // this.setState({array});
    }

    quickSort() {
        const array = getQuickSortAnimations(this.state.array);
        console.log(array);
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-wrapper">
                <div className="navbar">
                    <ul>
                        <li><button onClick={() => this.resetArray()}>Generate New Array</button></li>
                        <li><button onClick={() => this.mergeSort()}>Merge Sort</button></li>
                        <li><button onClick={() => this.quickSort()}>Quick Sort</button></li>
                        {/* <li><button onClick={() => this.mergeSort()}>Heap Sort</button></li> */}
                        <li><button onClick={() => this.bubbleSort()}>Bubble Sort</button></li>
                        <li><button onClick={() => this.insertionSort()}>Insertion Sort</button></li>
                    </ul>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar"
                            key={idx}
                            style={{height: `${value}px`}}>
                            {/* {value} */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}