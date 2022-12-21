import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'

function App() {
  const [gridSize, setGridSize] = useState(15)
  
  // can i do an array of state instead of state of array
  const [cells, setCells] = useState( 
    Array(gridSize).fill().map((_,i) =>
      new Array(gridSize).fill().map((_,j) => {
        return {
          marker: '',
          letter: 'x',
          cellType: '', // null, blank, cursor, word
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
  const [mode, setMode] = useState(false)

  const toggleBlankMode = () => {
    setMode(!mode)
  }

  const onCursor = (i, j) => {
    if (mode)
      toggleBlank(i, j)
    else
      moveCursor(i, j)
  }

  const toggleBlank = (i, j) => {
    let newCells = cells.map((row, _i) => {
      return (row.map((cell, _j) => {
        if (_i === i && _j === j)
        {
            return { ...cell,
              marker: '',
              cellType: (cell['cellType'] === 'blank') ? '' : 'blank',
              letter: ''
            }
        }
        if (cell['cellType'] === 'cursor' || cell['cellType'] === 'blank')
          return { ...cell, marker: '' }
        return { ...cell, marker: '', cellType: '' }
      }))
    })
    setCells(resetMarkers(resetWord(cursor['i'], cursor['j'], newCells)));
  }

  const moveCursor = (i, j) => {
    if (cells[i][j]['cellType'] === 'blank') return

    let old_i = cursor['i']
    let old_j = cursor['j']
    let dir = cursor['dir']

    if (old_i === i && old_j === j) {
      dir = (dir === 'across') ? 'down' : 'across'
    }

    cursor['dir'] = dir;

    let newCells = cells.map((row, _i) => {
      return (row.map((cell, _j) => { 
        if (_i === i && _j === j)
          return { ...cell, cellType: 'cursor' }
        else if (cell.cellType === 'blank')
          return cell
        return { ...cell, cellType: '' }
      } ))
    })

    setCells(resetWord(i, j, newCells));

    setCursor({i:i, j:j, dir:dir})
  }

  const resetMarkers = (newCells) => {
    
    return newCells;
  }

  // takes new cell grid with cleared out word 
  // finds & sets new word,
  const resetWord = (i, j, newCells) => {
    let dir = cursor['dir']

    var idx = (dir === 'across') ? i : (dir === 'down') ? j : -1;

    for (let _idx=idx-1; 0<=_idx; _idx--) {
      let _i = (dir === 'across') ? _idx : (dir === 'down') ? i    : -1;
      let _j = (dir === 'across') ? j    : (dir === 'down') ? _idx : -1;
      if (newCells[_i][_j]['cellType'] === 'blank')
        break;
      newCells[_i][_j]['cellType'] = 'word'
    }
    for (let _idx=idx+1; _idx<gridSize; _idx++) {
      let _i = (dir === 'across') ? _idx : (dir === 'down') ? i    : -1;
      let _j = (dir === 'across') ? j    : (dir === 'down') ? _idx : -1;
      if (newCells[_i][_j]['cellType'] === 'blank')
        break;
      newCells[_i][_j]['cellType'] = 'word'
    }

    return newCells;
  }

  return (
    <div className="container">
      <Header title={"title"} toggleBlankMode={toggleBlankMode}/>
      <Grid cells={cells} onCursor={onCursor}/>
    </div>
  );
}

export default App;
