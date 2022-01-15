import logo from './logo.svg';
import './App.css';
import React from 'react';
import SortingVisualizer from '/home/shad/sort-visualizer/my-app/src/SortingVisualizer/SortingVisualizer.js';
import NavBar from '/home/shad/sort-visualizer/my-app/src/NavBar/NavBar.js'


function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
