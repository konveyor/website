import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Forklift } from '../../images/forklift.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'
import { BarChart2, Cpu, Server } from 'react-feather'

export default function ForkliftPage() {
  const title = 'Konveyor Forklift'

  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-base-800 text-center mb-2 lg:mb-4'
  const subheadingStyle =
    'font-headings text-xl lg:text-3xl text-base-800 mt-4 mb-2 lg:mt-8 lg:mb-4'
  const ledeStyle = 'max-w-[60ch] text-xl lg:text-2xl text-base-600 mb-6'
  const paragraphStyle =
    'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'
  const projectSectStyle =
    'my-12 lg:mx-12 xl:mx-20 border-b-2 border-primary-200 pb-12 last:border-0 text-center md:text-left'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Rehost your Virtual Machines (VMs) to KubeVirt"
        text="Migrate virtual machines to Kubernetes at scale with the
        Forklift. Whether you are rehosting a few or hundreds of VMs
        to KubeVirt, Forklift helps you minimize downtime when you
        lift and shift these applications."
        img={<Forklift alt="" />}
      >
        <IconBox
          title="Documentation"
          url="https://github.com/konveyor/forklift-documentation/"
        />
        <IconBox
          title="Get Started"
          url="https://github.com/konveyor/forklift-documentation/"
          dark="true"
        />
      </Banner>

      <section className="z-0 py-12 lg:pt-32 md:pb-40 relative dark:before:opacity-60 dark:after:opacity-60 before:scale-x-[-1] before:z-[-1] before:bg-wave-pattern before:bg-no-repeat before:text-transparent before:w-full after:z-[-1] before:absolute before:h-full before:top-0 before:bg-left-top after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div
          className="absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]"
          aria-hidden
        >
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
            <p className="inline-block h-16 mb-4 rounded-full p-4 bg-primary-200 text-primary-800">
              <BarChart2 alt="" />
            </p>
            <p className={ledeStyle}>Migration Analytics</p>
            <p className={paragraphStyle}>
              Validate the compatibility of your virtual machinbe before
              executing your migration
            </p>
          </div>
          <div className="text-center">
            <p className="inline-block h-16 mb-4 rounded-full p-4 bg-success-200 text-success-800">
              <Cpu alt="" />
            </p>
            <p className={ledeStyle}>Warm migrations</p>
            <p className={paragraphStyle}>
              Reduce downtime by using warm migration capabilities, which will
              pre-copy your data before finalizing your migration
            </p>
          </div>
          <div className="text-center">
            <p className="inline-block h-16 mb-4 rounded-full p-4 bg-alert-200 text-alert-800">
              <Server alt="" />
            </p>
            <p className={ledeStyle}>Migration at Scale</p>
            <p className={paragraphStyle}>
              Migrate small or large amount of virtual machines at once.
            </p>
          </div>
        </div>
      </section>

      <section className="page-wrapper py-8 md:py-20 flex flex-col items-center">
        <h2 className={headingStyle}>Why Forklift</h2>
        <p className={ledeStyle}>
          Forklift provides a simplistic way to migrate your virtual machines at
          scale to kubernetes from traditional hypervisors like VMware and Red
          Hat Virtualization. Forklift is based on core linux v2v technologies
          that have been proven for years.
        </p>

        <div className="flex flex-wrap gap-3">
          <IconBox
            title="Documentation"
            url="https://github.com/konveyor/forklift-documentation/"
          />
          <IconBox
            title="Get Started"
            url="https://github.com/konveyor/forklift-documentation/"
            dark="true"
          />
        </div>
      </section>

      <CommunityLinks />
    </>
  )
}
