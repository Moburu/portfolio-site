import React from 'react'
import PropTypes from 'prop-types'
import './About.css';

const About = props => {
  return (
    <div id="about" className='About'>
      <h1 className='title-2'>Some more <span className='emphasis'>about</span> me...</h1>
      <div className='about'>
        <div className='about-img'>

        </div>
        <p className='about-txt'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam vulputate. Sodales ut etiam sit amet nisl purus in mollis nunc. Vel risus commodo viverra maecenas accumsan lacus vel. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Congue mauris rhoncus aenean vel elit.
        </p>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
