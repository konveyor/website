import React from 'react'
import { useState } from 'react'
import Seo from '../components/seo'
import { ReactComponent as About } from '../images/about.svg'
import { ReactComponent as Slack } from '../images/slack-large.svg'
import { ReactComponent as OfficeHours } from '../images/office-icon.svg'
import { ReactComponent as Konveyor } from '../images/Konveyor-icon.svg'
import { PlusCircle, MinusCircle } from 'react-feather'
import { graphql, useStaticQuery } from 'gatsby'
import * as Accordion from '@radix-ui/react-accordion'

const AccordionItem = ({ ...props }) => {
  const { title, children } = props
  const [open, setOpen] = useState(false)

  return (
    <Accordion.Item value={title}>
      <Accordion.Header>
        <Accordion.Trigger
          onClick={() => setOpen(!open)}
          className={`${
            open &&
            'text-secondary-800 hover:text-secondary-900 bg-secondary-200 hover:bg-secondary-200'
          } w-full border-b border-base-500 hover:bg-base-200 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-primary-600 text-left py-4 px-3 lg:text-xl font-medium`}
        >
          <div className="flex items-center space-x-3">
            {open ? (
              <MinusCircle className="flex-shrink-0 w-6 h-6" />
            ) : (
              <PlusCircle className="flex-shrink-0 w-6 h-6" />
            )}
            <span>{title}</span>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="text-left p-4 pb-16 border-b border-base-500 lg:text-lg">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  )
}

export default function AboutPage() {
  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-base-800 mb-2 lg:mb-4'
  const paragraphStyle =
    'max-w-[60ch] text-center text-lg lg:text-xl text-base-600 mb-4'

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            kubelinter
            socialMedia {
              platform
              url
            }
          }
        }
      }
    `,
  )

  const IconBox = ({ ...props }) => {
    const { title, url, icon } = props

    return (
      <a
        target="_blank"
        className="border-2 bg-base-100 hover:border-base-500 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary-600 rounded-lg w-full border-base-400 p-4 flex flex-col justify-center items-center"
        rel="noopener noreferrer"
        href={url}
      >
        <div className="h-32 mb-4">{icon}</div>
        <p className="text-2xl font-semibold">{title}</p>
      </a>
    )
  }

  return (
    <>
      <Seo title="About" />
      <div className="overflow-hidden text-center py-12 md:py-16 lg:pb-24">
        <div className="flex flex-col items-center space-y-32 page-wrapper">
          <section className="flex flex-col items-center max-w-screen-lg z-0">
            <h1 className={headingStyle}>Why StackRox?</h1>
            <p className={paragraphStyle}>About the StackRox community</p>
            <About className="max-w-screen-sm my-6" alt="About StackRox" />

            <p className={paragraphStyle}>
              StackRox strives to be a security and cloud-native project that
              provides open source security tools, educational resources, and an
              interactive community.
            </p>

            <p className={paragraphStyle}>
              We want the StackRox project to provide the broader cloud-native
              community with an open solution for Kubernetes-native security and
              align the open source project with cloud-native tooling and enable
              security experts to share their experiences with building
              Kubernetes security.
            </p>
            <div
              className="absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]"
              aria-hidden
            >
              <div
                style={{ top: '200px', left: '20vw' }}
                className="bg-alert-100 dark:bg-accent-100 absolute rounded-full h-10 w-10"
              />
              <div
                style={{ bottom: '120px', left: '10vw' }}
                className="bg-warning-100 dark:bg-accent-100 absolute rounded-full h-12 w-12"
              />
              <div
                style={{ top: '60%', right: '15vw' }}
                className=" bg-caution-100 dark:bg-accent-100 absolute rounded-full h-8 w-8"
              />
              <div
                style={{ top: '300px', right: '25vw' }}
                className="bg-tertiary-100 dark:bg-accent-100 absolute rounded-full h-12 w-12"
              />
            </div>
          </section>
          <section className="flex flex-col items-center space-y-8 w-full max-w-screen-lg relative z-0">
            <h2 className={`${headingStyle} text-center`}>
              Frequently asked questions
            </h2>
            <Accordion.Root
              className="w-full border-t border-base-500"
              type="multiple"
            >
              <AccordionItem title="What is the purpose of StackRox.io?">
                Red Hat is announcing the launch of the StackRox community at
                KubeCon + CloudNativeCon Europe. This community will aim to
                develop the industry’s leading open source Kubernetes-native
                security solution. A new community site at stackrox.io is being
                launched concurrently with the announcement to enable interested
                end users and organizations to participate in development and
                related activities. The site will also make available relevant
                content and resources on various topics related to Kubernetes
                security.
              </AccordionItem>
              <AccordionItem title="What will the StackRox project do?">
                The StackRox project will provide the broader cloud-native
                community with an open solution for Kubernetes-native security
                that enables users to build, deploy, and run cloud-native
                applications anywhere. It will enable users to address all
                significant security use cases across the entire application
                lifecycle, including visibility, vulnerability management,
                configuration management, network segmentation, compliance,
                threat detection and incident response, and risk profiling.
              </AccordionItem>
              <AccordionItem title="Why is this being announced now?">
                An open development model is core to Red Hat. Additionally, we
                believe that this model can drive significant innovation and
                benefits for end users when it comes to security, an industry
                with many solutions that have closed codebases. Security
                continues to be a critical need for the broader cloud-native
                community building and running Kubernetes applications. The
                StackRox community can work toward providing a new open source
                solution that gives end users greater choice for how they
                protect their Kubernetes environments.
              </AccordionItem>
              <AccordionItem title="Will there be any collaboration with any other projects and/or communities? Which ones?">
                Yes, as part of open sourcing the StackRox software, Red Hat
                will contribute to open source projects that the StackRox
                software benefits from and participate as active members of the
                communities that support those projects.
              </AccordionItem>
              <AccordionItem title="Will there still be a commercial offering of the StackRox software?">
                The commercial StackRox offering has been rebranded as Red Hat
                Advanced Cluster Security for Kubernetes (RHACS). Going forward,
                once open sourced, StackRox will be the primary upstream project
                that powers RHACS (in addition to other open source projects).
              </AccordionItem>
              <AccordionItem title="Will any other open source projects be included? What open source code can an end-user use today?">
                The StackRox community will also encompass and continue to
                foster the development of KubeLinter, which was released as an
                open source project in October 2020. KubeLinter is a static
                analysis tool that enables developers to easily check Kubernetes
                YAML files and Helm charts to identify misconfigurations and
                enforce security best practices.
              </AccordionItem>
            </Accordion.Root>
            <div
              className="absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]"
              aria-hidden
            >
              <div
                style={{ bottom: '-100px', left: '-5vw' }}
                className="bg-primary-100 dark:bg-accent-100 absolute rounded-full h-9 w-9"
              />
              <div
                style={{ bottom: '350px', right: '-9vw' }}
                className="bg-caution-100 dark:bg-accent-100 absolute rounded-full h-12 w-12"
              />
            </div>
          </section>
          <section className="flex flex-col w-full items-center text-center relative z-0">
            <h2 className={headingStyle}>Get involved</h2>
            <p className={paragraphStyle}>
              We are always looking for volunteers to help grow and enrich our
              community
            </p>
            <div className="space-y-6 mt-16 mb-12 md:space-x-6 md:space-y-0 w-full flex flex-col md:flex-row">
              <IconBox
                title="Connect with us on Slack"
                url="#"
                icon={<Slack />}
              />
              <IconBox
                title="View past office hours"
                url="https://www.youtube.com/playlist?list=PL_uKap2n977tpvunWtj05ddKywKx2CfKh"
                icon={<OfficeHours />}
              />
              <IconBox
                title="Contribute to open source"
                url={site.siteMetadata.kubelinter}
                icon={<Konveyor />}
              />
            </div>
            <div
              className="absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]"
              aria-hidden
            >
              <div
                style={{ bottom: '-45px', right: '5vw' }}
                className="bg-warning-100 dark:bg-accent-100 absolute rounded-full h-12 w-12"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
