// import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = ({ title, toggleBlankMode }) => {
    return (
        <header className='header'>
        <h1>{title}</h1> 
        <Button color='green' text='Hello' onClick={toggleBlankMode}/>
        </header>
    )
}



export default Header
