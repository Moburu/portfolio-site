import React from 'react'
import PropTypes from 'prop-types'
import './Projects.css'
import styled from 'styled-components';
import simplereddit from './simplereddit.PNG';
import somewhere from './somewhere.png';
import battleship from './battleship.PNG';
import nycmeleestats from './nycmeleestats.PNG'
import dataviz from './dataviz.PNG'
import { useRef, useState, useEffect } from 'react';

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 15px 10px 54px 10px;
  transform: scale(1.25);
  @media screen and (max-width: 899px) {
    flex-direction: ${props => props.position === "right" ? "column-reverse" : "column"};
    width: auto;
    margin-top: 50px;
  }
`;

const Description = styled.div`
  width: 320px;
  height: 180px;
  border-top: 1px solid white;
  margin: 10px;
  @media screen and (max-width: 899px) {
    border-top: 0px;
  }
  @media screen and (max-width: 500px) {
    width: 240px;
    margin-bottom: 42px;
  }
`;

const DescText = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  font-weight: 300;
  text-align: ${props => props.align};
  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

const Container = styled.div`
  width: 320px;
  height: 180px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-size:100% 100%;
  @media screen and (max-width: 899px) {
    margin-bottom: -10px;
    max-width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 240px;
    height: 135px;
  }
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
  @media screen and (max-width: 899px) {
    width: ;
    height: ;
  }
  @media screen and (max-width: 500px) {
    width: 240px;
    height: 135px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 300;
  text-align: ${props => props.position};
  margin: auto;
  transform: translate(0%, -100%);
  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

const Linebreak = styled.br`
  color: #9748E5;
  width: 100%;
  height: 2px;
  @media screen and (min-width: 899px) {
    display: none;
  }
`

const Projects = props => {
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
    <div ref={ domRef } id="projects" className={isVisible ? "Projects visible" : "Projects"}>
      <h1 className='title'>Here are some of the <br /><span className='emphasis'>projects</span> I've worked on.</h1>
      <div className='project-grid'>
          <a href="https://nycmelee.vercel.app" rel="noreferrer" target="_blank">
            <Project position="right">
              <Description>
                <DescText align="right">Allows competitors in NYC Melee tournaments to access their stats, featuring player cards and graphs.</DescText>
                <DescText align="right">HTML - CSS - JS - Node - React - Python - SQL</DescText>
              </Description>
              <Container src={nycmeleestats}>
                <Overlay />
                <Title position="right">NYCMelee Stats</Title>
              </Container>
            </Project>
          </a>
          <Linebreak />
          <a href="https://captaindarshan.github.io/CDC-DATA-ANALYSIS/" rel="noreferrer" target="_blank">
            <Project position="left">
              <Container src={dataviz}>
                <Overlay />
                <Title position="left">CDC Data Viz</Title>
              </Container>
              <Description >
                <DescText align="left">A site offering interactive visualizations for CDC disease data including a chloropleth map.</DescText>
                <DescText align="left">HTML - CSS - JS - Python - SQL</DescText>
              </Description>
            </Project>
          </a>
          <a href="https://moburu.github.io/simplereddit" rel="noreferrer" target="_blank">
            <Project position="right">
              <Description>
                <DescText align="right">Uses Reddit's JSON API to fetch data based on a user query, then displays it in the form of a stack of cards.</DescText>
                <DescText align="right">HTML - CSS - JS - Node - React</DescText>
              </Description>
              <Container src={simplereddit}>
                <Overlay />
                <Title position="right">simplereddit</Title>
              </Container>
            </Project>
          </a>
      </div>
    </div>
  )
}

Projects.propTypes = {}

export default Projects
