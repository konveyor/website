import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ReactComponent as SlackLogo } from '../images/slack-logo.svg'
import { ReactComponent as GitHubLogo } from '../images/github-logo.svg'
import { ReactComponent as KonveyorIcon } from '../images/Konveyor-icon.svg'
import { ReactComponent as KonveyorIconWh } from '../images/Konveyor-icon-wh.svg'
import { ReactComponent as Meetups } from '../images/meetups.svg'
import { ReactComponent as SIGIcon } from '../images/konveyorcircles-smallicon.svg'
import * as Card from './card'

const CommunityLinks = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialMedia {
              platform
              url
              title
            }
          }
        }
      }
    `,
  )
  const slack = site.siteMetadata.socialMedia.filter((media) => media.platform === 'slack')[0].url
  const github = site.siteMetadata.socialMedia.filter((media) => media.platform === 'github')[0].url

  return (
    <section className="get-involved z-0 relative bg-base-200 py-16 lg:pt-24 lg:pb-40 after:z-[-1] after:text-transparent after:bg-low-poly after:rotate-180 after:bg-no-repeat after:w-full after:absolute after:h-full after:top-0 after:bg-left-bottom after:opacity-60 before:opacity-60 before:transform before:z-[-1] before:bg-low-poly before:bg-no-repeat before:text-transparent before:w-full before:absolute before:h-full before:top-0 before:bg-left-bottom overflow-hidden">
      <div className="page-wrapper">
        <h2 className="font-headings text-3xl lg:text-5xl text-center mb-8 md:mb-20">
          Get involved in the Konveyor Community
        </h2>
        <div className="md:mb-8 lg:mb-12 flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 xl:gap-8">
          <Card.Root>
            <Card.Header>
              <Meetups alt="" className="h-10" />
              Meetups
            </Card.Header>
            <Card.Body>
              Practitioners share migration strategies, lessons learned, and tools used at community
              live virtual meetups.{' '}
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://www.youtube.com/channel/UCQ3pW3gSBeCy0tj1J0ub2bw/videos">
                Watch past meetups
              </Card.Link>
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <SlackLogo alt="Slack" className="max-h-12" />
            </Card.Header>
            <Card.Body>
              Have questions about your migration project or how to use our tools? Ping us on Slack.
            </Card.Body>
            <Card.Footer>
              <Card.Link href={slack}>Join our Slack Channel</Card.Link>
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <GitHubLogo alt="GitHub" className="max-h-10" />
            </Card.Header>
            <Card.Body>
              Use Konveyor tools and submit pull requests to help improve these open source tools.
            </Card.Body>
            <Card.Footer>
              <Card.Link href={github}>Access GitHub Repository</Card.Link>
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <KonveyorIcon alt="" className="dark:hidden h-10" />
              <KonveyorIconWh alt="" className="hidden dark:block h-10" /> Konveyor Blog
            </Card.Header>
            <Card.Body>
              Read articles on how practitioners bring existing applications to Kubernetes at scale
              and updates on Konveyor tools.
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/blog/">Read the latest</Card.Link>
            </Card.Footer>
          </Card.Root>
          <Card.Root>
            <Card.Header>
              <SIGIcon />
              <p className="text-lg">Special Interest Groups</p>
            </Card.Header>
            <Card.Body>
              Learn about the SIGs that work together to develop our toolkit and drive the Konveyor
              community
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/community/">Learn how to get involved</Card.Link>
            </Card.Footer>
          </Card.Root>
        </div>
      </div>
    </section>
  )
}

export default CommunityLinks
