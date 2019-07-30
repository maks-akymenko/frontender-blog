import React from "react"
import { Link, graphql } from "gatsby"

import { Bio, BuyMeACoffee, Layout, SEO } from "src/components"

import { Arrows, BackButton, Date, Description, Flex, ReadingTime, Title } from './blog-post.styled'

import { Emoji } from 'src/styles/Emoji'

const BlogPostTemplate = ({ data, location, pageContext: { previous, next } }) => {
  console.log(data);
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BackButton>
        <Link to="/">← Go back</Link>
      </BackButton>
      <Title>
        {post.frontmatter.title}
      </Title>
      <hr />
      <Flex>
        <Date>
          {post.frontmatter.date}
        </Date>
        <ReadingTime>
          <Emoji label="time">⏳</Emoji>
          {post.fields.readingTime.text}
        </ReadingTime>
      </Flex>
      <Description dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Bio />
      <BuyMeACoffee />
      <Arrows>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
              </Link>
          )}
        </li>
      </Arrows>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
