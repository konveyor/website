/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import MailChimp from './mailchimp'

function Seo({ description, lang, meta, image, title, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            image
            description
            twitterCreator
          }
        }
      }
    `,
  )

  const siteUrl = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description
  const metaImage = getSrc(image) || site.siteMetadata.image
  const defaultTitle = site.siteMetadata?.title
  const defaultMeta = [
    {
      name: `description`,
      content: `${metaImage} metaDescription`,
    },
    {
      property: `og:title`,
      content: title ? `${title} | ${defaultTitle}` : defaultTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: article ? `article` : `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.twitterCreator || ``,
    },
    {
      name: `twitter:title`,
      content: title ? `${title} | ${defaultTitle}` : defaultTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]
  const defaultOgImage = [
    {
      property: `og:image`,
      content: `${siteUrl}${metaImage}`,
    },
  ]

  // For some reason og:image in meta is being ignored. Only add the default if
  // meta does not contain it.
  const found = meta.find(({ property }) => property === 'og:image')
  let metas = [...meta, ...defaultMeta]

  if (typeof found !== 'object') {
    metas = metas.concat(defaultOgImage)
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        defer={false}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        defaultTitle={defaultTitle}
        meta={metas}
      />
      <MailChimp />
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default Seo
