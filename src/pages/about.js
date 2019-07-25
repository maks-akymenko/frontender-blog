import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

import { Layout, Menu, SEO } from 'src/components'
import { Emoji } from 'src/styles/Emoji'

import "animate.css/animate.min.css";

const About = ({ location }) => {
  return (
    <Layout location={location} title="About me">
      <SEO title="About me" />
      <Menu />
      <AboutMe>
        <Title>
          Hey folks, my name is Maks <Emoji label="hello">👋🏼</Emoji>
        </Title>
        <ScrollAnimation animateIn="fadeInUp">
          <Description>
            Most of my time I build digital products <Emoji label="builder">👷🏽‍♂️</Emoji>. I am frontend developer with diversified experience in web and mobile development. I'm also very creative person with over 2 years of experiences in wide range of web technologies <Emoji label="laptop">💻</Emoji> , writer <Emoji label="writing">📝</Emoji>, developer <Emoji label="developer">👨🏻‍💻</Emoji>, guitar player <Emoji label="guitar">🎸</Emoji>, traveler <Emoji label="planet">🌍</Emoji> and technology lover<Emoji label="technologies">📱🖥🖱</Emoji>.
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Description>
            I define myself by the work I want to do <Emoji label="hand">☝🏼</Emoji>. Skills can be taught, personality is inherent. I prefer to never stop learning, continue challenging myself, and do interesting things that matter <Emoji label="exclamation">❗️</Emoji>
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Description>
            Fueled by high energy enthusiasm <Emoji label="rocket">🚀</Emoji>, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate a lot about what I'm doing.
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Description>
            I’m a fast learner <Emoji label="race-car">🏎</Emoji>, able to pick up new skills and juggle different projects and roles with relative ease. I like to develop expertise in a number of areas over the course of my life and career.
            I currently work remotely <Emoji label="remote">⛱</Emoji> . Feel free to get in touch by any means of communication <Emoji label="communication">🗣</Emoji>
          </Description>
        </ScrollAnimation>
      </AboutMe>
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default About

const AboutMe = styled.section`
  padding: 0.5rem;
`

const Title = styled.h2`
  font-size: 2rem;
`

const Description = styled.p`
  font-size: 1.1rem;
`

