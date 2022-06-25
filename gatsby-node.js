const path = require('path')
const fse = require('fs-extra')
const { paginate } = require('gatsby-awesome-pagination')
const _ = require('lodash')
const { DateTime } = require('luxon')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const query = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }

      posts: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/(/blog/)/" } }
      ) {
        nodes {
          slug
        }
      }

      tags: allMdx(sort: { order: DESC, fields: frontmatter___tags }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  // Check for any errors
  if (query.errors) {
    throw new Error(query.errors)
  }

  const posts = query.data.posts.nodes
  const tags = query.data.tags.group

  const blogIndexTemplate = path.resolve(`src/templates/blog.js`)
  const tagsTemplate = path.resolve(`src/templates/tag.js`)

  // Create tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.tag)}`,
      component: tagsTemplate,
      context: {
        tag: tag.tag,
      },
    })
  })

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: query.data.site.siteMetadata.postsPerPage,
    pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
    component: blogIndexTemplate,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Define schema for Hello Bar & frontmatter
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type HelloBarYaml implements Node {
    display: Boolean
    title: String
    end_date: Date
    background_color: String
    link_text: String
    link_url: String
  }
  `
  createTypes(typeDefs)
}
