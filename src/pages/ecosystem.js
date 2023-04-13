import * as React from 'react'
import Seo from '../components/seo'
import CommunityLinks from '../components/community-links'
import CommunitySupporters from '../components/community-supporters'
import ModernizationReport from '../components/modernization-report-section'
import { ReactComponent as Move2Kube } from '../images/move2kube.svg'
import { ReactComponent as ContainerIcon } from '../images/addons/icon-02.svg'
import { ReactComponent as ConfigurationIcon } from '../images/addons/icon-05.svg'
import { ReactComponent as DivaIcon } from '../images/addons/icon-04.svg'
import { ReactComponent as TestIcon } from '../images/addons/icon-06.svg'
import { ReactComponent as GravityIcon } from '../images/addons/icon-07.svg'
import SignUpForm from '../components/sign-up-form'
import { graphql } from 'gatsby'
import RecentPosts from '../components/recent-posts'
import Bubbles from '../components/bubbles'

export default function Ecosystem({ data }) {
  const paragraphStyle =
    'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none'

  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-primary-800 text-center mb-2 lg:mb-4'

  const addons = [
    {
      title: 'Konveyor Container Advisor',
      content: `Using natural language processing, this tool can analyze
      a description of your application and suggest the most
      suitable container image to containerize the application.
      Analyze up to thousands of non-containerized
      applications at a time.`,
      icon: <ContainerIcon />,
      repoUrl: 'https://github.com/konveyor/tackle-container-advisor#readme',
    },
    {
      title: 'Konveyor Configuration Discovery',
      content: `Locate and transform configuration files to
      adapt them to a target runtime.`,
      icon: <ConfigurationIcon />,
      repoUrl: 'https://github.com/konveyor/tackle-config-discover',
    },
    {
      title: `Konveyor -DiVA Database Operator
      Adaption (DiVA-DOA)`,
      content: `Generate Kubernetes resource definitions (YAML
        files) to help migrate an application with legacy
        DBMS system to cloud native environment that
        works with HA DB cluster.`,
      icon: <DivaIcon />,
      repoUrl: 'https://github.com/konveyor/tackle-diva/tree/main/doa',
    },
    {
      title: `Konveyor Test Generator`,
      content: `Ensure applications behave the same way after
      being modernized by creating a functional
      application profile using automatically generated
      unit tests.`,
      icon: <TestIcon />,
      repoUrl: 'https://github.com/konveyor/tackle-test-generator-cli',
    },
    {
      title: `Konveyor Data Gravity Insights`,
      content: `Gain insights into your monolithic application code
      so that you can better refactor it into domain
      driven microservices. By analyzing source code,
      data, and transactional boundaries, this tools
      helps you discover application domains of interest
      and refactor them into microservices.`,
      icon: <GravityIcon />,
      repoUrl: 'https://github.com/konveyor/tackle-data-gravity-insights',
    },
  ]

  const posts = data.recentPosts.nodes

  return (
    <>
      <Seo title="Ecosystem" />

      {/* Header */}
      <section className="light overflow-hidden border-b border-base-300 bg-primary-800 relative before:absolute before:bg-hero-waves before:pointer-events-none before:hidden lg:before:flex before:text-transparent before:w-full before:h-full before:bg-left-bottom before:bg-repeat-x ">
        <div className="flex place-items-center py-8 md:py-16 lg:pt-24 lg:pb-44 page-wrapper">
          <div className="mx-auto max-w-[60ch]">
            <h1 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-base-200">
              The Konveyor <span className="text-orange-400">Ecosystem</span>
            </h1>
            <p className={`${paragraphStyle} text-base-200 my-6 lg:my-8`}>
              The Konveyor Ecosystem is an incubator for projects that are not currently integrated
              into the Konveyor Toolkit but are in development by the community. Check out the
              GitHub repos on these projects to learn more, try out, and participate in their
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Move2Kube */}
      <section className="bg-base-200 justify-center items-center text-center py-20">
        <div className="md:w-full page-wrapper">
          <h2 className="font-headings font-bold text-5xl md:text-5xl tracking-wide text-center mb-12">
            Move2Kube
          </h2>
          <div className="flex flex-col md:flex-row md:w-2/3 mx-auto">
            <div className="sm:mb-6 md:w-1/2 justify-right">
              <div className="p-6">
                <Move2Kube />
              </div>
            </div>

            <div className="md:w-1/2 space-y-4 pt-6 md:text-left md:flex md:flex-col md:justify-center ">
              <div className="text-left">
                <h3 className="font-headings font-bold text-lg md:text-xl tracking-wide">
                  Replatform Applications to Kubernetes
                </h3>
              </div>
              <p className="text-lg lg:text-xl text-left">
                Automate the replatforming of your applications to Kubernetes with Move2Kube. With
                this tool, you can translate your source files to Kubernetes artifacts to quickly
                get your workloads running on Kubernetes
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-center">
                <a
                  href="https://move2kube.konveyor.io/installation"
                  className="inline-flex bg-primary-700 text-primary-100 hover:bg-base-200 hover:text-base-800 focus:bg-base-200 focus:text-base-800 flex-row gap-2 items-center rounded-md border-2 border-primary-400 px-2 md:px-4 py-2 text-base lg:text-lg font-bold hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  Get Started
                </a>
                <a
                  href="https://move2kube.konveyor.io/"
                  className="inline-flex bg-primary-100 text-primary-700 hover:bg-base-800 hover:text-base-100 focus:bg-base-800 focus:text-base-100 flex-row gap-2 items-center rounded-md border-2 border-primary-400 px-2 md:px-4 py-2 text-base lg:text-lg font-bold hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 "
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addon Section */}
      <section className="z-0 py-12 md:pt-32 md:pb-40 lg:pt-40 relative dark:after:opacity-60 after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="page-wrapper">
          {/* Header text */}
          <div className="text-center ">
            <h2 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-gray-700 md:pb-12">
              Konveyor (Formerly Tackle) Add-on Components
            </h2>
          </div>

          {addons.map((addon, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center my-24">
              <div className="w-full md:w-1/2 mx-auto block md:hidden">{addon.icon}</div>
              {index % 2 === 0 && <div className="w-1/2 mx-auto hidden md:block">{addon.icon}</div>}
              <div>
                <h2 className="font-headings font-bold text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-4">
                  {addon.title}
                </h2>
                <p className={`${paragraphStyle} text-gray-500 mb-6`}>{addon.content}</p>
                <a
                  href={addon.repoUrl}
                  className="inline-flex bg-primary-100 text-primary-700 hover:bg-base-800 hover:text-base-100 focus:bg-base-800 focus:text-base-100 flex-row gap-2 items-center rounded-md border-2 border-primary-400 px-2 md:px-4 py-2 text-base lg:text-lg font-bold hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  Github Repo
                </a>
              </div>
              {index % 2 === 1 && <div className="w-1/2 mx-auto hidden md:block">{addon.icon}</div>}
            </div>
          ))}
        </div>
        <Bubbles />
      </section>

      <CommunityLinks />
      <CommunitySupporters />
      <ModernizationReport headingStyle={headingStyle} paragraphStyle={paragraphStyle} />
      <SignUpForm />
      <RecentPosts headingStyle={headingStyle} posts={posts} />
    </>
  )
}

export const query = graphql`
  {
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
