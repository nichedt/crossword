import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'

function App() {
  const [gridSize, setGridSize] = useState(15)
  const [cells, setCells] = useState(
    Array(gridSize).fill().map((_,i) =>
      new Array(gridSize).fill().map((_,j) => {
        return {
          marker: 2,
          letter: 'x',
          isCursor: false,
          isWord: false,
          isBlank: false,
          i: i,
          j: j,
        }
      })
    )
  )
  const [cursor, setCursor] = useState({
    i: -1,
    j: -1,
    dir: 'across',
  })

  const moveCursor = (i, j) => {
    let old_i = cursor['i']
    let old_j = cursor['j']
    let dir = cursor['dir']

    if (old_i === i && old_j === j) {
      dir = (dir === 'across') ? 'down' : 'across'
    }

    let newCells = cells.map((row, _i) => {
      return (row.map((cell, _j) => { 
        if (_i === i && _j === j)
          return { ...cell, isCursor: true, isWord: false }
        else if (dir === 'across' && _i === i)
          return { ...cell, isCursor: false, isWord: true }
        else if (dir === 'down' && _j === j)
          return { ...cell, isCursor: false, isWord: true }
        return { ...cell, isCursor: false, isWord: false }
      } ))
    })

    setCells(newCells)
    setCursor({i:i, j:j, dir:dir})
  }

  return (
    <div className="container">
      <Header title={"title"}/>
      <Grid cells={cells} onCursor={moveCursor}/>
    </div>
  );
}

export default App;
