import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Logo
      </div>

      <div className='links-nav'>
        <Link className='links' to="todo">ToDo</Link>
        <Link className='links' to="carousel">Carousel</Link>
      </div>
    </div>
  )
}

export default Navbar