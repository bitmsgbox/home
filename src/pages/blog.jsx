import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from './blog.module.scss'

export default function Blog({ data }) {
  return (
    <Layout>
      <div className={styles.container}>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4>s */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3
              >
                {node.frontmatter.title}{" "}
                <span
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fields: {slug: {regex: "/^/blog/"}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    } 
  }
`