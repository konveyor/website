import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Crane } from '../../images/crane.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'
import { ReactComponent as Icon1 } from '../../images/crane/icon-01.svg'
import { ReactComponent as Icon2 } from '../../images/crane/icon-02.svg'
import { ReactComponent as Icon3 } from '../../images/crane/icon-03.svg'
import SignUpForm from '../../components/sign-up-form'

export default function CranePage() {
  const title = 'Konveyor Crane'

  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-primary-800 text-center mb-2 lg:mb-4'
  const subheadingStyle =
    'font-headings text-xl lg:text-3xl text-primary-800 mt-4 mb-2 lg:mt-8 lg:mb-4'
  const ledeStyle = 'max-w-[60ch] text-xl lg:text-2xl text-base-700 mb-6'
  const paragraphStyle = 'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'
  const projectSectStyle =
    'my-12 lg:mx-12 xl:mx-20 border-b-2 border-primary-200 pb-12 last:border-0 text-center md:text-left'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Rehost Applications Between Kubernetes Clusters"
        text="With the open source tool Crane, you can move container-based workloads between clusters of different Kubernetes distributions at scale while keeping state, removing environment-specific configuration, and automating application deployments."
        img={<Crane alt="" />}
      >
        <IconBox title="Documentation" url="#" />
        <IconBox title="Get Started" url="#" dark="true" />
      </Banner>

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-20 md:my-12 gap-8 page-wrapper">
          <div className="text-center">
            <p className="inline-block h-24 mb-4 text-primary-800">
              <Icon2 alt="" />
            </p>
            <p className={ledeStyle}>Migrate Between different Kubernetes distributions</p>
            <p className={paragraphStyle}>
              Crane can help you update your Kubernetes manifest for your latest distribution and
              version.
            </p>
          </div>
          <div className="text-center">
            <p className="inline-block h-24 mb-4 text-primary-800">
              <Icon1 alt="" />
            </p>
            <p className={ledeStyle}>Migrate to an automated deployment model</p>
            <p className={paragraphStyle}>
              Export existing apps to Git, and automate your deployments using continuous delivery
            </p>
          </div>
          <div className="text-center">
            <p className="inline-block h-24 mb-4 text-primary-800">
              <Icon3 alt="" />
            </p>
            <p className={`md:min-h-[2.8em] lg:min-h-[2.666em] ${ledeStyle}`}>Migrate at scale</p>
            <p className={paragraphStyle}>
              Execute large migrations or cluster evacuations in a fully automated manner.
            </p>
          </div>
        </div>
      </section>

      <section className="page-wrapper py-8 md:py-20 flex flex-col items-center">
        <h2 className={headingStyle}>Why Crane</h2>
        <p className={ledeStyle}>
          Crane is the product of our team distilling several years of experience performing
          large-scale production Kubernetes migrations. These operations are large, complex,
          error-prone, and usually must be peformed under a limited window of time. Because of that
          challenge, its paramount that a migration tool be designed with transparency and
          ease-of-diagnostics in mind.
        </p>

        <div className="mt-4 md:mt-8 w-full rounded-2xl border-2 border-base-400 p-4 md:p-8 lg:p-12 grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 bg-tertiary-100 dark:bg-base-100">
          <div>
            <h3 className={`${subheadingStyle} !mt-0`}>Watch a demo of the tool</h3>
            <p className={`${paragraphStyle} max-w-[60ch]`}>
              This video recording demonstrates how to migrate stateful applications between
              Kubernetes clusters using Crane CLI.
            </p>
            <div className="flex flex-wrap gap-3">
              <IconBox title="Documentation" url="https://crane-docs.konveyor.io/" />
              <IconBox
                title="Get Started"
                url="https://crane-docs.konveyor.io/content/getting-started/installation/"
                dark="true"
              />
            </div>
          </div>
          <div className="video-embed">
            <iframe
              className="rounded-lg"
              title="YouTube Video"
              src="https://www.youtube.com/embed/kp5vFIg0BhQ?rel=0"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <CommunityLinks />

      <SignUpForm />
    </>
  )
}
