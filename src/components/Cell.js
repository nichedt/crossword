import React from 'react'

const Cell = ({ cell }) => {
    return (
        <div className='cell'><div className='box'>
            <div className='marker'>{cell.marker}</div>
            <div className='letter'>{cell.letter}</div>
        </div></div>
    )
}

export default Cell
