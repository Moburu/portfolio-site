import React from 'react'
import PropTypes from 'prop-types'
import './Landing.css'

const Landing = props => {
  return (
    <div className='Landing'>
      <h1>Hi! I'm <span className="emphasis">Steven Schiffner</span>, <br /> web developer.</h1>
      <p className='description'>I’m interested in making beautiful, robust, and useful web apps. Click the link below see what I’ve worked on and learn more about me!</p>
      <div className='socials'>
        <a href="https://github.com/Moburu"><img className="github" alt="The github logo, linking to the author's github page." src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
        <a href="https://www.linkedin.com/in/steven-schiffner-b972b5163/"><img className='linkedin' alt="The linkedin logo, linking to the author's linkedin page." src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" /></a>
      </div>
    </div>
  )
}

Landing.propTypes = {}

export default Landing
