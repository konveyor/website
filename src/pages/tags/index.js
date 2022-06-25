import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'

const title = 'Tags'

const TagsPage = ({
  data: {
    tagGroup: { group },
  },
}) => (
  <>
    <Seo title={title} description="Blog post tags." />

    <h1 className="my-4 font-headings font-bold text-4xl tracking-wide">{title}</h1>
    <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    tagGroup: allMdx(sort: { order: DESC, fields: frontmatter___tags }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
