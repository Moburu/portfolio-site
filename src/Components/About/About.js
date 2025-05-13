import React from 'react'
import PropTypes from 'prop-types'
import './About.css';
import { useEffect, useState, useRef } from 'react'

const About = props => {
  const domRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  })

  return (
    <div ref={ domRef } id="about" className={isVisible ? "About visible" : "About"}>
      <div className='abt-subsection'>
        <h1 className='left-title'>Some more <span className='emphasis'>about</span> me...</h1>
        <p className='about-txt'>I'm a New Jersey based developer with a background in math. I've been interested in coding since I was in high school, and after graduating from NYU with a BA in math, I decided to pursue coding as a career. I've since been honing my skills and developing projects in my spare time, using online resources such as Codecademy and The Odin Project. I'd love to hear about any and all opportunities involving web development!</p>
      </div>
      <div className='abt-subsection'>
        <h1 className='right-title'>Some <span className='emphasis'> technologies</span> <br />I work with:</h1>
        <div className='tech-grid'>
          <div className='icon-holder html5'>
            <i className="devicon-html5-plain my-devicon"></i>
            <span className='icon-description'>HTML5</span>
          </div>
          <div className='icon-holder css3'>
            <i className="devicon-css3-plain my-devicon"></i>
            <span className='icon-description'>CSS3</span>
          </div>
          <div className='icon-holder javascript'>
            <i className="devicon-javascript-plain my-devicon"></i>
            <span className='icon-description'>JavaScript</span>
          </div>
          <div className='icon-holder react'>
            <i className="devicon-react-original my-devicon"></i>
            <span className='icon-description'>React</span>
          </div>
          <div className='icon-holder python'>
            <i className="devicon-python-plain my-devicon"></i>
            <span className='icon-description'>Python</span>
          </div>
          <div className='icon-holder jest'>
            <i className="devicon-jest-plain my-devicon"></i>
            <span className='icon-description'>Jest</span>
          </div>
          <div className='icon-holder node'>
            <i className="devicon-nodejs-plain my-devicon"></i>
            <span className='icon-description'>Node.js</span>
          </div>
          <div className='icon-holder express'>
            <i className="devicon-express-original my-devicon"></i>
            <span className='icon-description'>Express</span>
          </div>
          <div className='icon-holder postgresql'>
            <i className="devicon-postgresql-plain my-devicon"></i>
            <span className='icon-description'>PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
