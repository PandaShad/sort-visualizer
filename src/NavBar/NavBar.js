import React from 'react';
import './NavBar.css';
import '../SortingVisualizer/SortingVisualizer.js';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer.js';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
        </div>)
    }
}