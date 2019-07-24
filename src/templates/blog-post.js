import React from "react"
import { Link, graphql } from "gatsby"

import { Bio, Layout, SEO } from "src/components"

import { Arrows, BackButton, Date, Description, Title } from './blog-post.styled'

const BlogPostTemplate = ({ data, location, pageContext: { previous, next } }) => {
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
      <Date>
        {post.frontmatter.date}
      </Date>
      <Description dangerouslySetInnerHTML={{ __html: post.html }} />
      <Bio />
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
    }
  }
`
