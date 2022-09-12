import React from 'react'

const Cell = ({ cell, onCursor }) => {
  const cursorClass = cell.isCursor ? 'cursor' : ''
  const blankClass = cell.isBlank ? 'blank' : ''
  const wordClass = cell.isWord ? 'word' : ''
  const boxClasses = `box ${cursorClass} ${blankClass} ${wordClass}`
  return (
    <div className='cell' onClick={() => onCursor(cell.i, cell.j)}>
      <div className={boxClasses}>
        <div className='marker'>{cell.marker}</div>
        <div className='letter'>{cell.letter}</div>
      </div>
    </div>
  )
}

export default Cell
