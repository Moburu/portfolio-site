import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import logo from './logo.png'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Resume = styled.span`
    color: #9748E5;
    border: 1px solid #9748E5;
    border-radius: 5px;
    padding: 5px;
    font-weight: 300;
    transition: 0.25s;
    &: hover {
        color: #fff;
        box-shadow: inset 0 0 0 2em #9748E5;
    }
`
const Navbar = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isSidebarVisisble, setIsSidebarVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    //show navbar if we either scroll up by over 30 pixels at once, or we're by the top of the screen
    if ((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30) || currentScrollPos < 10 ) {
        setIsVisible(true)
        setPrevScrollPos(currentScrollPos);
    } // simply update the position if we scroll up by 30 pixels or less
    else if (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos <= 30) {
      setPrevScrollPos(currentScrollPos);
    } // hide navbar if we scroll down
    else {
        setIsVisible(false);
        setPrevScrollPos(currentScrollPos);
    }
  };

  const handleClick = e => {
    e.preventDefault();
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isVisible]);

  return (
    <div className='navbar-wrapper'>
      <div className={isVisible ? "Navbar" : "Navbar hidden"}>
        <div className='overlay'>
        </div>
        <div className='side-menu'>
        </div>
        <img className="logo" src={logo} alt="The site logo. An S within a circle." />
        <div className='hamburger-menu'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <ul className="links">
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <li><Resume>Resume</Resume></li>
        </ul>
      </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
