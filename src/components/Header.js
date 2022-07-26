import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
        <h1>notes app</h1>
        <button onClick={() => {
            handleToggleDarkMode(
                (prevDarkMode) => !prevDarkMode
                )}
            } 
            className='save'
            >
            Toggle Mode
        </button>
    </div>
  )
}

export default Header