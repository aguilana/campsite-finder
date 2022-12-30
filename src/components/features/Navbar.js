import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h2>YelpCamp</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campgrounds">Campgrounds</Link></li>
            <li><Link to="/campgrounds/create">New Campground</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar