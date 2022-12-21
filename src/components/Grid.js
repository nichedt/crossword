import React from 'react'
import Cell from './Cell'

const Grid = ({ cells, onCursor }) => {
  return ( <div className='grid'> {
    cells.map((row, i) => { return (
      <div className='row' key={i}> {row.map((cell, j) => { return (
        <Cell key={j} cell={cell} onCursor={onCursor} />
      ) })} </div>
    ) }
  )} </div> )
}

export default Grid
