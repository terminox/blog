import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link 
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3 
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span 
                css={css`
                  color: #bbb;
                `}
              >
                - {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
 query {
   allMarkdownRemark {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMMM DD, YYYY")
         }
         excerpt
         fields {
           slug
         }
       }
     }
   }
 }
`