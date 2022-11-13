import React from 'react'
import PropTypes from 'prop-types'
import './Projects.css'
import styled from 'styled-components';
import google from './google.png'

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 10px 54px 10px;
  transform: scale(1.3);
`;

const Description = styled.div`
  width: 320px;
  height: 180px;
  border-top: 1px solid white;
  margin: 10px;
`;

const DescText = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  font-weight: 300;
  text-align: ${props => props.align};
`;

const Container = styled.div`
  width: 320px;
  height: 180px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-size: contain;
`;

const Overlay = styled.div`
  width: 320px;
  height: 180px;
  background-color: #9748E5;
  border-radius: 5px;
  opacity: 50%;
  transition: opacity .5s;
  position: absolute;
  ${Project}:hover & {
    opacity: 0%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 300;
  width: 100%;
  text-align: ${props => props.position};
  margin: auto;
  transform: translate(0%, -100%);
`;

const Projects = props => {
  return (
    <div id="projects" className='Projects'>
      <h1 className='title'>Here are some of the <br /><span className='emphasis'>projects</span> I've worked on.</h1>
      <div className='project-grid'>
          <Project>
            <Description>
              <DescText align="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DescText>
              <DescText align="right">HTML - CSS - JS - Node - React</DescText>
            </Description>
            <Container src={google}>
              <Overlay />
              <Title position="right">Lorem Ipsum</Title>
            </Container>
          </Project>
          <Project>
            <Container src={google}>
              <Overlay />
              <Title position="left">Lorem Ipsum</Title>
            </Container>
            <Description >
              <DescText align="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DescText>
              <DescText align="left">HTML - CSS - JS - Node - React</DescText>
            </Description>
          </Project>
          <Project>
            <Description >
              <DescText align="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DescText>
              <DescText align="right">HTML - CSS - JS - Node - React</DescText>
            </Description>
            <Container src={google}>
              <Overlay />
              <Title position="right">Lorem Ipsum</Title>
            </Container>
          </Project>
      </div>
    </div>
  )
}

Projects.propTypes = {}

export default Projects
