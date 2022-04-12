import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const LogoImage = ({ image, alt, ...other }) => {
  if (image?.extension === 'svg')
    return (
      <div
        {...other}
        aria-label={alt}
        dangerouslySetInnerHTML={{ __html: image.svg.content }}
      />
    )

  const logo = getImage(image)

  return (
    <div {...other}>
      <GatsbyImage image={logo} alt={alt} />
    </div>
  )
}

const CommunityMembers = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMembersYaml {
            nodes {
              name
              logo {
                childImageSharp {
                  gatsbyImageData(
                    height: 36
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP]
                  )
                }
                svg {
                  content
                }
                extension
                base
                publicURL
              }
            }
          }
        }
      `}
      render={({ allMembersYaml }) => (
        <ul className="mt-4 md:mt-8 mb-12 flex flex-wrap items-center justify-center gap-8">
          {allMembersYaml.nodes.map((member) => (
            <li key={member.name}>
              <LogoImage
                className="h-9 max-w-[160px] text-black dark:text-white"
                image={member.logo}
                alt={member.name}
              />
            </li>
          ))}
        </ul>
      )}
    />
  )
}

export default CommunityMembers
