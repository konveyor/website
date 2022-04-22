import React from 'react'
import Seo from '../components/seo'
import Callout from '../components/callout'
import { ReactComponent as KonveyorIcon } from '../images/Konveyor-icon-cc.svg'
import { Edit, Mail, Mic, Slack, User } from 'react-feather'
import { graphql, useStaticQuery } from 'gatsby'
import SignUpForm from '../components/sign-up-form'

export default function CommunityPage() {
  const headingStyle = 'font-headings text-3xl md:text-4xl lg:text-5xl text-base-800 mb-2 lg:mb-6'
  const paragraphStyle =
    'text-lg lg:text-xl text-base-600 pb-4 border-b border-base-300 mb- lg:h-full'

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialMedia {
              platform
              url
            }
          }
        }
      }
    `,
  )

  // There must be a better way of doing this. If so, send suggestion.
  const slack = site.siteMetadata.socialMedia.filter((media) => media.platform === 'slack')[0].url

  return (
    <>
      <Seo title="Community" />
      <section className="light bg-primary-800 text-primary-200 flex flex-col justify-center items-center text-center min-h-[400px] px-4 md:px-6">
        <div className="space-y-6 max-w-[900px]">
          <h1 className="font-headings font-bold text-5xl md:text-6xl tracking-wide">
            Join the Konveyor community
          </h1>
          <p className="text-lg lg:text-xl">
            The Konveyor community modernizes applications by providing open source tools to rehost,
            replatform, and refactor applications to Kubernetes and cloud-native technologies. We'd
            love you to join us! Here's a few ways to find out what's happening and
            get&nbsp;involved.
          </p>
        </div>
      </section>
      <section className="z-0 py-12 lg:pt-32 md:pb-40 relative dark:before:opacity-60 dark:after:opacity-60 before:scale-x-[-1] before:z-[-1] before:bg-wave-pattern before:bg-no-repeat before:text-transparent before:w-full after:z-[-1] before:absolute before:h-full before:top-0 before:bg-left-top after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
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
            get&nbsp;started.
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
            organizers know about&nbsp;it.
          </Callout>
        </div>
      </section>

      <SignUpForm />
    </>
  )
}
