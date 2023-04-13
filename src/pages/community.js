import React from 'react'
import Seo from '../components/seo'
import Callout from '../components/callout'
import { ReactComponent as KonveyorIcon } from '../images/Konveyor-icon-cc.svg'
import { Edit, Mail, Mic, Slack, User } from 'react-feather'
import { graphql, useStaticQuery } from 'gatsby'
import SignUpForm from '../components/sign-up-form'
import CommunitySupporters from '../components/community-supporters'
import ModernizationReport from '../components/modernization-report-section'
import RecentPosts from '../components/recent-posts'
import Bubbles from '../components/bubbles'
import { ReactComponent as SIGIcon } from '../images/konveyorcircles.svg'

export default function CommunityPage({ data }) {
  const headingStyle = 'font-headings text-3xl md:text-4xl lg:text-5xl text-base-800 mb-2 lg:mb-6'
  const paragraphStyle =
    'text-lg lg:text-xl text-base-600 pb-4 border-b border-base-300 mb- lg:h-full'
  const posts = data.recentPosts.nodes
  const site = data.site

  const sigLinks = [
    {
      title: 'SIG Core',
      url: 'https://github.com/konveyor/community/tree/main/sig-core',
    },
    {
      title: 'SIG UI',
      url: 'https://github.com/konveyor/community/tree/main/sig-ui',
    },
    {
      title: 'SIG Analyzers',
      url: 'https://github.com/konveyor/community/tree/main/sig-analyzers',
    },
    {
      title: 'SIG Integration',
      url: 'https://github.com/konveyor/community/tree/main/sig-integration',
    },
  ]

  // There must be a better way of doing this. If so, send suggestion.
  const slack = site.siteMetadata.socialMedia.filter((media) => media.platform === 'slack')[0].url

  return (
    <>
      <Seo title="Community" />
      <section className="light bg-primary-800 text-primary-200 flex flex-col justify-center items-center text-center min-h-[400px] px-4 md:px-6">
        <div className="space-y-6 max-w-[900px]">
          <h1 className="font-headings font-bold text-4xl md:text-5xl tracking-wide">
            The Konveyor <span className="text-orange-400">Community Mission</span>
          </h1>
          <p className="text-lg lg:text-xl">
            A community of people passionate about helping others modernize and migrate their
            applications to the hybrid cloud by building tools and best practices on how to
            replatform and refactor applications to run on Kubernetes and cloud-native technologies
          </p>
        </div>
      </section>

      <section className="bg-base-200 justify-center items-center text-center py-20">
        <div className="md:w-full md:page-wrapper">
          <h2 className="font-headings font-bold text-5xl md:text-5xl tracking-wide text-center mb-12">
            Special Interest Groups (SIGs)
          </h2>
          <div className="md:flex md:flex-row w-2/3 mx-auto">
            <div className="sm:mb-6 md:w-1/2 justify-right">
              <div className="p-6">
                <SIGIcon />
              </div>
            </div>

            <div className="md:w-1/2 space-y-4 pt-6 md:text-left md:flex md:flex-col md:justify-center ">
              <p className="text-lg lg:text-xl text-left">
                The Konveyor community development efforts are organized around Special Interest
                Groups (SIG) modeled after the SIGs created by the Kubernetes community.
              </p>
              <p className="text-lg lg:text-xl text-left">
                These SIGs focus on the major areas of core, UI, analyzers, and add-ons. Each of
                which is These groups are responsible for the development, integration, maintenance,
                and collaboration of the project.
              </p>
              <p className="text-lg lg:text-xl text-left">
                Working with a specific SIG helps to organize and accelerate development efforts.
                Click on the GitHub repo links below to learn more about each of the SIGs and it's
                focus and mission:
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-left">
                <ul className="list-disc list-inside mb-4">
                  {sigLinks.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.url}
                        className="text-lg lg:text-xl text-left underline font-bold"
                        target={'_blank'}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="z-0 py-12 lg:pt-32 md:pb-40 relative">
        <div className="absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]" aria-hidden>
          <div
            style={{ bottom: '110px', left: '10vw' }}
            className="bg-alert-100 dark:hidden absolute rounded-full h-8 w-8"
          />
          <div
            style={{ bottom: '30px', right: '50%' }}
            className="bg-warning-100 dark:hidden absolute rounded-full h-12 w-12"
          />
          <div
            style={{ bottom: '80px', right: '10vw' }}
            className="bg-primary-100 dark:hidden absolute rounded-full h-14 w-14"
          />
        </div>

        <div className="grid lg:grid-cols-2 my-12 md:my-0 gap-8 page-wrapper">
          <div className="flex flex-col h-full">
            <h2 className={headingStyle}>Join us</h2>
            <p className={paragraphStyle}>A few ways to get&nbsp;involved:</p>
          </div>

          <Callout
            className="lg:order-3"
            title="Attend meetups"
            url="https://www.youtube.com/channel/UCQ3pW3gSBeCy0tj1J0ub2bw/videos"
            icon={<User alt="" />}
          >
            Practitioners share migration strategies, lessons learned, and tools used at community
            live virtual&nbsp;meetups.
          </Callout>
          <Callout className="lg:order-5" title="Slack" url={slack} icon={<Slack alt="" />}>
            Have questions about your migration project or how to use our tools? Ping us
            on&nbsp;Slack.
          </Callout>
          <Callout
            className="lg:order-7"
            title="Subscribe to community updates"
            url="#sign-up"
            icon={<Mail alt="" />}
          >
            Stay up-to-speed with all things Konveyor and migrating to Kubernetes by subscribing to
            our email&nbsp;list.
          </Callout>

          <div className="mt-8 lg:mt-0 lg:order-2 flex flex-col h-full">
            <h2 className={headingStyle}>Contribute</h2>
            <p className={paragraphStyle}>Ways to&nbsp;contribute:</p>
          </div>

          <Callout
            title="Present to the community"
            className="lg:order-4"
            type="light"
            url="mailto:konveyorio@gmail.com"
            icon={<Mic alt="" />}
          >
            Share your experience on migrating to Kubernetes with others. Reach out to
            get&nbsp;started by sending us an email:{' '}
            <span className="underline">konveyorio@gmail.com</span>&nbsp;
          </Callout>
          <Callout
            className="lg:order-6"
            title="Konveyor Tool Suite"
            type="light"
            url="https://github.com/konveyor"
            icon={<KonveyorIcon alt="" />}
          >
            We develop multiple open source tools. We would love for you to take it for a test run
            and learn more about these&nbsp;tools.
          </Callout>
          <Callout
            className="lg:order-8"
            title="Blogs"
            type="light"
            url="mailto:konveyorio@gmail.com"
            icon={<Edit alt="" />}
          >
            Blogs are open for contribution. Is there a topic you are interested in? Let the
            organizers know about it by sending us an email:{' '}
            <span className="underline">konveyorio@gmail.com</span>&nbsp;
          </Callout>
        </div>
        <Bubbles />
      </section>
      <CommunitySupporters />
      <ModernizationReport />
      <SignUpForm />
      <RecentPosts headingStyle={headingStyle} posts={posts} />
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        socialMedia {
          platform
          url
        }
      }
    }
    recentPosts: allMdx(
      filter: { fileAbsolutePath: { regex: "/(/blog/)/" } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2.22, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  }
`
