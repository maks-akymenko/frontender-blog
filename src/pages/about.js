import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'

import { Layout, Menu, SEO } from 'src/components'
import { Emoji } from 'src/styles/Emoji'
import { ABOUT_PATH, START_WORKING_DATE } from 'src/shared/constants'

import "animate.css/animate.min.css";

const About = ({ location }) => {
  const daysCount = differenceInCalendarDays(Date.now(), START_WORKING_DATE);
  const hoursCount = Math.round(daysCount * 1.5)

  return (
    <Layout location={location} title={ABOUT_PATH}>
      <SEO title={ABOUT_PATH} />
      <Menu />
      <AboutMe>
        <Title>
          Hey folks, my name is Maks <Emoji label="hello">👋🏼</Emoji>
        </Title>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Description>
            I am a frontend developer<Emoji label="programmer">👨🏻‍💻</Emoji> based in Cracow, Poland and I'm keen about personal development. I’ve been a full-time developer for almost 2 years ({daysCount} days).
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Description>
            For some of you, it might not seem that much <Emoji label="why">🤷🏼‍♂️</Emoji>. However, imagine if you spend every day averagely 1-2 hours to learn and practice something new — it's around {hoursCount} extra hours. Quite a lot, huh? <Emoji label="eyes">👀</Emoji>
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Note>
            <Description>
              <Emoji label="bulb">💡</Emoji>
              Do not think I've counted it so precisely, I just know JavaScript!
            </Description>
          </Note>
          <Description>
            What else? I could probably call myself a writer <Emoji label="writer">📝</Emoji>, I certainly am if you are here in my blog reading this! I also write on <a target="_blank" rel="noreferrer noopener" href="https://medium.com/@maks.akymenko">
              Medium</a> and <a target="_blank" rel="noreferrer noopener" href="https://css-tricks.com/author/maksakymenko/">CSS-tricks</a>
          </Description>
          <Description>
            I travel a lot, can't imagine a month without going somewhere <Emoji label="planet">🗺</Emoji>, and I do love technologies in all their kinds. Hi <Emoji label="hi">👋🏼</Emoji>, smart houses, biohacking and self-driving cars! <Emoji label="car">🚗</Emoji>
          </Description>
          <Description>
            If you read up until this point, it's time for a small bonus <Emoji label="present">🎁</Emoji>:
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Description bold>
            List of my personal productivity tips:
            </Description>
          <List>
            <li><Emoji label="tool">🛠</Emoji> practice what you've just learned.</li>
            <li><Emoji label="audiobooks">🎶</Emoji> listen to audiobooks while going somewhere.</li>
            <li><Emoji label="phone in hand">🤳🏼</Emoji> filter content, either it is YouTube or any social network.</li>
            <li><Emoji label="yoga">🧘🏼‍♂️</Emoji>remember about balance in everything. You can't learn or be productive 24/7 — it's okay to be lazy sometimes. Just don't get used to it </li>
            <li><Emoji label="sport">🏋🏼‍♂️</Emoji> do morning exercise and sport every day!</li>
            <li><Emoji label="guy">💁🏻‍♂️</Emoji> learn one new thing every day.</li>
            <li><Emoji label="speed">🚤</Emoji> listen audio or watch video on 2x speed.</li>
          </List>
          <Description bold>
            You can read more <Link to="/how-i-boost-my-productivity-as-a-programmer">here</Link>
          </Description>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Description bold>
            Mobile apps I use:
            </Description>
          <List>
            <li><span>Notion</span>. Like to keep my goals, useful links, plans and articles in one place.</li>
            <li><span>Medium</span>. Read a lot  about programming there a lot.</li>
            <li><span>Apple Podcasts</span>. Listen not only to audiobooks.</li>
            <li><span>Timepage by Moleskine</span>. I am just in love with there design.</li>
            <li><span>Spark</span>. Love this email-client with smart inbox.</li>
            <li><span>Scanner Mini</span>. We all do scans sometimes.</li>
            <li><span>Wifi Map</span>. Map with available wifi nearby. Sometimes could be very useful.</li>
          </List>
          <Description bold>
            Have a nice day <Emoji label="sun">🌞</Emoji>
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
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};

  a {
    color: ${({ theme }) => theme.primaryYellow};
  }
  `

const Note = styled.div`
  padding: 0.25rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.formGrey};
  border-radius: 5px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
  }
`

const List = styled.ul`
  padding-left: 1.5rem;

  li {
  font-size: 1.1rem;
  margin: 1rem 0;

   span {
      font-weight: bold;
    }
  }
`

