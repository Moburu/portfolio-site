import React from 'react'
import PropTypes from 'prop-types'
import './Project.css'
import styled from 'styled-components'

const Description = styled.div`
  width: 320px;
  height: 180px;
  border-top: 1px solid white;
`;

const DescText = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  font-weight: 300;
  text-align: right;
`;

const Container = styled.div`
  width: 320px;
  height: 180px;
  border-radius: 5px;
`;

const Overlay = styled.div`
  width: 320px;
  height: 180px;
  background-color: #9748E5;
  border-radius: 5px;
  opacity: 50%;
  position: absolute;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
  width: 100%;
  text-align: ${props => props.position};
  margin: auto;
  transform: translate(0%, -100%);
`;

const Project = props => {
  return (
    <div className='Project'>
        <Container>
        <Overlay />
        <Title></Title>
        </Container>
        <Description >
        </Description>
    </div>
  )
}

Project.propTypes = {}

export default Project
