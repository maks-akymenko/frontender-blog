import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Emoji } from 'src/styles/Emoji'

import { Flex, BioParagraph } from './bio.styled';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/main-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Flex>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 75,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <BioParagraph>
        Created and designed by <strong>{author}</strong>, frontend developer based in Krakow, Poland <Emoji label="polish flag">🇵🇱</Emoji>.
        {` `}
        <a target='_blank' rel='noopener noreferrer' href={`https://linkedin.com/in/${social.linkedin}`}>
          Say hello <Emoji label="hello">👋🏼</Emoji>
        </a>
      </BioParagraph>
    </Flex>
  )
}

export default Bio
