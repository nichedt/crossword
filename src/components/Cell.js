import React from 'react'

const Cell = ({ cell, onCursor }) => {
  return (
    <div className='cell' onClick={() => onCursor(cell.i, cell.j)}>
      <div className={
        `box ${ cell.isCursor ? 'cursor' : '' } ${ cell.isBlank ? 'blank' : '' }`
      }>
        <div className='marker'>{cell.marker}</div>
        <div className='letter'>{cell.letter}</div>
      </div>
    </div>
  )
}

export default Cell
