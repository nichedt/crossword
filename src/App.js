import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'

function App() {
  const [cells, setCells] = useState(
    Array(15).fill().map((_,i) =>
      new Array(15).fill().map((_,j) => {
        return {
          marker: 2,
          letter: 'x',
          isCursor: false,
          isBlank: false,
          i: i,
          j: j,
        }
      })
    )
  )
  const [cursor, setCursor] = useState([-1, -1])

  const moveCursor = (i, j) => {
    // newCells = cells.map((row, _i) => {
    //   row.map((cell, _j) => {
    //     ...cell, isCursor = true;
    //   }
    // })
    // let oldRow = cursor[0]
    // let oldCol = cursor[1]
    // if (0 <= oldRow && oldRow <= cells.length
    // && 0 <= oldCol && oldCol <= cells[0].length) {
    //   cells[oldRow][oldCol].isCursor = false;
    // }
    // cells[row][col].isCursor = true;
    
    // setCells(cells)
    // setCursor([row, col])
  }

  return (
    <div className="container">
      <Header title={"title"}/>
      <Grid cells={cells} onCursor={moveCursor}/>
    </div>
  );
}

export default App;
