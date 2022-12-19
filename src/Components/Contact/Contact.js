import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 200;
  font-size: 32px;
  color: #9748E5;
  border: 1px solid #9748E5;
  background: transparent;
  box-shadow: 0 0 0 0 black;
  margin: 10px;
  width: 185px;
  height: 65px;
  border-radius: 5px;
  transition: color 0.25s, box-shadow 0.25s;
  &: hover {
    color: #fff;
    box-shadow: inset 0 0 0 2em #9748E5;
  };
  @media screen and (max-width: 649px) {
    width: 120px;
    height: 64px;
    font-size: 24px;
  }
`

const Contact = props => {
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
    <div ref={ domRef } id="contact" className={isVisible ? "Contact visible" : "Contact"}>
      <h1 className='title-3'>I'd love to hear from you! <br /><span className='emphasis'>Contact</span> me via the links below:</h1>
      <div className='button-container'>
        <a href="mailto:stevenschiffner3@gmail.com"><Button>Email</Button></a>
        <a href="https://github.com/Moburu"><Button>GitHub</Button></a>
        <a href="https://www.linkedin.com/in/steven-schiffner-b972b5163/"><Button>LinkedIn</Button></a>
      </div>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
