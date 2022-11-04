import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import logo from './logo.png'

const Navbar = props => {
  return (
    <div className="Navbar">
      <img className="logo" src={logo} alt="The site logo. An S within a circle." />
      <ul className="links">
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
        <li><a><span className='resume'>Resume</span></a></li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
