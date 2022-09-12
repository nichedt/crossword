import React from 'react'
import Cell from './Cell'

const Grid = ({ cells }) => {
  return ( <div className='grid'> {
    cells.map((row, i) => { return (
      <div className='row' key={i}> {row.map((cell, j) => { return (
        <Cell key={j} cell={cell} />
      ) })} </div>
    ) }
  )} </div> )
}

export default Grid
