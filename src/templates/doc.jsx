import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MarkdownDoc from "../components/markdown-doc/markdown-doc"

export default function Doc({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <MarkdownDoc post={post} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`