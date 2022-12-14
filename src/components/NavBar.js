import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const NavBar = () => {

  const dispatch = useDispatch()

  useEffect
  

  return (
    <nav id='navbar'>
        <ul id='nav-list'>
                <li className="nav-item"><NavLink to="/" className='nav-item'> Home </NavLink></li>
                <li className="nav-item"><NavLink to="/campuses" className='nav-item'> Campuses </NavLink></li>
                <li className="nav-item"><NavLink to="/students" className='nav-item'> Students </NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar