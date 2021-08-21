import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='header_wrapper'>
      <div className='header_align'>
        <header>
          <nav>
            <NavLink to='/login'>login</NavLink>
            <NavLink to='/signup'>sign up</NavLink>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Nav
