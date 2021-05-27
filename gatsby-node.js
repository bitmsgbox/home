/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    if (slug.startsWith('/doc')) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/doc.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug,
        },
      })
    } else if (slug.startsWith('/blog')) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug,
        },
      })
    } else {
      // not implement
    }
  })
}