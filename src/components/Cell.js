import React from 'react'

const Cell = ({ cell, onCursor }) => {

  const boxClasses = `box ${cell.cellType}`

  return (
    <div className='cell noselect' onClick={() => onCursor(cell.i, cell.j)}>
      <div className={boxClasses}>
        <div className='marker'>{cell.marker}</div>
        <div className='letter'>{cell.letter}</div>
      </div>
    </div>
  )
}

export default Cell
