import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div>
          <h1
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`