import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, SEO } from 'src/components'

import { Emoji } from 'src/styles/Emoji'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Title>Not Found</Title>
      <Text>You just hit a route that doesn&#39;t exist...</Text>
      <Text>But now worries, that's the right time to grab some tea
        {' '}
        <Emoji label="tea">🍵</Emoji>and read.
      </Text>
      <Button>
        <Link to="/">Read something good</Link>
      </Button>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Title = styled.h1`
  font-size: 2rem;
`

const Text = styled.p`
  font-size: 1.1rem;
`

const Button = styled.div`
  max-width: 15rem;
  margin: 3rem auto;
  padding: 1.5rem;
  border-radius: 90px;
  text-align: center;
  background: ${({ theme }) => theme.primaryYellow};
  transition: background 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primaryYellowHover};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`
