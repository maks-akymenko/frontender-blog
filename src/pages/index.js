import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import { Bio, Layout, Menu, SEO } from 'src/components'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Menu />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogPost key={node.fields.slug}>
              <Date>{node.frontmatter.date}</Date>
              <Title>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </Title>
              <Description
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </BlogPost>
          )
        })}
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
// styled-components
const BlogPost = styled.div`
  margin: 3.5rem 0;
  padding: 0.5rem;
`

const Date = styled.small`
  color: ${({ theme }) => theme.primaryGrey};
  text-transform: uppercase;
`

const Title = styled.h3`
  font-size: 2.25rem;
  letter-spacing: 0.15rem;
  margin: 0;

  a {
    color: ${({ theme }) => theme.primaryYellow};
    text-transform: uppercase;
    text-decoration: underline;
    transition: color 0.3s ease-in;

    &:hover {
      color: ${({ theme }) => theme.primaryGrey};
    }
  }
`

const Description = styled.p`
  font-size: 1.1rem;
`

