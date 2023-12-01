import React from 'react'
import '../App.css'
function Header() {
  return (
    <div className='header-cont'>

        <div>
            <input type='text' placeholder='Search' />
        </div>
        <div>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Header
