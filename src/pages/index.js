import { graphql, Link } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import HeroImage from '../components/hero-image'
import { StaticImage } from 'gatsby-plugin-image'
import { ReactComponent as Slack } from '../images/slack-icon.svg'
import { ReactComponent as HomeBanner } from '../images/homepage-hero.svg'
import { ReactComponent as Crane } from '../images/crane.svg'
import { ReactComponent as Move2Kube } from '../images/move2kube.svg'
import { ReactComponent as Tackle } from '../images/tackle.svg'
import { ReactComponent as Forklift } from '../images/forklift.svg'
import { ReactComponent as Pelorus } from '../images/pelorus.svg'
import IconBox from '../components/iconbox'
import CommunityMembers from '../components/community-members'
import WidowControl from '../components/widow-control'
import { ArrowRight, FileText } from 'react-feather'
import CommunityLinks from '../components/community-links'

export default function IndexPage({ data }) {
  const posts = data.allMdx.nodes

  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-base-800 text-center mb-2 lg:mb-4'
  const subheadingStyle =
    'font-headings text-xl lg:text-3xl text-base-800 text-center mt-4 mb-2 lg:mt-8 lg:mb-4'
  const ledeStyle =
    'max-w-[60ch] text-xl lg:text-2xl text-base-600 mb-6 max-w-[50ch] md:max-w-none'
  const paragraphStyle =
    'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'
  const projectSectStyle =
    'my-12 lg:mx-12 xl:mx-20 border-b-2 border-primary-200 pb-12 last:border-0 text-center md:text-left'

  const ReportCover = () => (
    <StaticImage
      src="../images/report-2022-cover.png"
      alt="State of Application Modernization with the Konveyor Community cover"
      className="rounded-lg w-40 md:w-auto self-center md:self-start"
      width="1028"
    />
  )

  return (
    <div className="overflow-hidden">
      <Seo />
      <section className="light overflow-hidden border-b border-base-300 bg-primary-800 relative before:absolute before:bg-hero-waves before:pointer-events-none before:hidden lg:before:flex before:text-transparent before:w-full before:h-full before:bg-left-bottom before:bg-repeat-x">
        <div className="page-wrapper flex flex-col lg:flex-row gap-8 items-center py-8 md:py-16 lg:pt-24 lg:pb-44">
          <div className="max-w-[55ch] lg:w-2/5">
            <h1 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-base-200">
              <WidowControl text="Accelerate Your Application Modernization to Kubernetes" />
            </h1>
            <p className={`${paragraphStyle} text-base-200 my-6 lg:my-8`}>
              The Konveyor community modernizes applications by providing open
              source tools to rehost, replatform, and refactor applications to
              Kubernetes and cloud-native technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <IconBox title="Get Community Updates" url="#" />
              <IconBox
                title="Join our Slack Group"
                url="#"
                icon={<Slack alt="" />}
                dark="true"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <HomeBanner
              alt="Use Konveyor tools to assess and rehost, replatform, or refactor existing applications"
              className="banner"
            />
          </div>
        </div>
      </section>
      <section className="z-0 py-12 md:pt-32 md:pb-40 lg:pt-40 relative dark:after:opacity-60 after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="mb-8 md:mb-0 flex flex-col items-center page-wrapper">
          <h2 className={headingStyle}>The Konveyor Tool Suite</h2>
          <p className={`${paragraphStyle} text-center md:max-w-[64ch]`}>
            Through separate open source migration tools, the{' '}
            <strong>Konveyor Tool Suite</strong> streamlines the modernization
            and migration of existing applications to Kubernetes across a range
            of use cases.
          </p>
          <p
            className={`${paragraphStyle} font-bold mt-8 text-center md:max-w-[64ch]`}
          >
            Watch how all of these tools work together in this{' '}
            <a
              className={aStyle}
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              application modernization&nbsp;demo
            </a>
            .
          </p>

          <div className="mt-4 md:mt-8">
            <div className={projectSectStyle}>
              <h3 className="sr-only">Konveyor Crane</h3>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Crane
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <p className={ledeStyle}>
                    Rehost Applications Between Kubernetes Clusters
                  </p>
                  <p className={paragraphStyle}>
                    With Crane, you can move container-based workloads between
                    clusters of different Kubernetes distributions at scale
                    while keeping state, removing environment-specific
                    configuration, and automating application deployments.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox title="Get Started" url="#" dark="true" />
                    <IconBox title="Learn More" url="/tools/crane/" />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <h3 className="sr-only">Konveyor Move2Kube</h3>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/5 flex justify-center">
                  <Move2Kube
                    alt=""
                    className="max-w-[16rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <p className={ledeStyle}>
                    Replatform Applications to Kubernetes
                  </p>
                  <p className={paragraphStyle}>
                    Automate the replatforming of your applications to
                    Kubernetes with Move2Kube. With this tool, you can translate
                    your source files to Kubernetes artifacts to quickly get
                    your workloads running on Kubernetes.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox title="Get Started" url="#" dark="true" />
                    <IconBox title="Learn More" url="/tools/move2kube/" />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <h3 className="sr-only">Konveyor Tackle</h3>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <p className={ledeStyle}>
                    Assess, Prioritize, and Refactor Applications to Kubernetes
                  </p>
                  <p className={paragraphStyle}>
                    Streamline the modernization of your application portfolio
                    to Kubernetes. Through related tools, Tackle gives you
                    insight throughout the adoption process – whether you're
                    making decisions at the portfolio or application level.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox title="Get Started" url="#" dark="true" />
                    <IconBox title="Learn More" url="/tools/tackle/" />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <h3 className="sr-only">Konveyor Forklift</h3>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/5 flex justify-center">
                  <Forklift
                    alt=""
                    className="max-w-[12rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <p className={ledeStyle}>
                    Rehost your Virtual Machines (VMs) to KubeVirt
                  </p>
                  <p className={paragraphStyle}>
                    Migrate virtual machines to Kubernetes at scale with the
                    Forklift. Whether you are rehosting a few or hundreds of VMs
                    to KubeVirt, Forklift helps you minimize downtime when you
                    lift and shift these applications.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox title="Get Started" url="#" dark="true" />
                    <IconBox title="Learn More" url="/tools/forklift/" />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <h3 className="sr-only">Konveyor Pelorus</h3>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Pelorus
                    alt=""
                    className="max-w-[12rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <p className={ledeStyle}>
                    Measure Software Delivery Performance on Kubernetes (
                    <em>*work in progress</em>)
                  </p>
                  <p className={paragraphStyle}>
                    Prove the value of modernization. With the Pelorus tool, you
                    can measure the key metrics to software delivery performance
                    (lead time for change, deployment frequency, mean time to
                    restore, and change failure rate) and enable metrics driven
                    transformation.
                  </p>
                  <p className={`${paragraphStyle} italic`}>
                    *Only compatible with OpenShift at the moment. Work in
                    progress to support upstream Kubernetes compatibility. See
                    why compatibility hasn’t been established yet and what the
                    status is in this{' '}
                    <a
                      href="#"
                      className={aStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub issue
                    </a>
                    .
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox title="Get Started" url="#" dark="true" />
                    <IconBox title="Learn More" url="/tools/pelorus/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute w-full hidden md:flex top-0 left-0 h-full pointer-events-none z-[-1]"
          aria-hidden
        >
          <div
            style={{ top: '180px', left: '15vw' }}
            className="bg-tertiary-100 dark:hidden absolute rounded-full h-10 w-10"
          />

          <div
            style={{ top: '32px', right: '15vw' }}
            className="bg-caution-100 dark:hidden absolute rounded-full h-12 w-12"
          />

          <div
            style={{ bottom: '50px', right: '8vw' }}
            className="bg-warning-100 dark:hidden absolute rounded-full h-12 w-12"
          />

          <div
            style={{ bottom: '140px', left: '10vw' }}
            className="bg-alert-100 dark:hidden absolute rounded-full h-10 w-10"
          />
          <div
            style={{ bottom: '100px', left: '55%' }}
            className="bg-primary-100 dark:hidden absolute rounded-full h-14 w-14"
          />
        </div>
      </section>

      <CommunityLinks />

      <section className="z-0 py-12 md:pt-24 relative dark:before:opacity-60 before:scale-x-[-1] before:z-[-1] before:bg-wave-pattern before:bg-no-repeat before:text-transparent before:w-full before:absolute before:h-full before:top-0 before:bg-left-top">
        <div className="flex flex-col items-center page-wrapper">
          <h3 className={headingStyle}>Community Supporters</h3>
          <CommunityMembers />
          <IconBox
            title="Reach out to become a community supporter"
            url="#"
            icon={<ArrowRight alt="" />}
            right="true"
          />
          <div
            className="absolute w-full hidden md:flex top-0 left-0 h-full pointer-events-none z-[-1]"
            aria-hidden
          >
            <div
              style={{ top: '80px', left: '20vw' }}
              className="bg-tertiary-100 dark:hidden absolute rounded-full h-10 w-10"
            />

            <div
              style={{ bottom: '120px', right: '17vw' }}
              className="bg-caution-100 dark:hidden absolute rounded-full h-12 w-12"
            />

            <div
              style={{ bottom: '-40px', left: '10vw' }}
              className="bg-success-100 dark:hidden absolute rounded-full h-14 w-14"
            />
          </div>
        </div>
      </section>
      <section className="z-1 my-12 md:mt-24 md:mb-40 page-wrapper">
        <div className="w-full rounded-2xl mt-10 md:mt-16 md:mb-8 lg:mb-24 border-2 border-base-400 bg-primary-200 dark:bg-base-300 p-4 md:p-8 xl:p-16 flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-16">
          <ReportCover />
          <div>
            <h2 className={`${headingStyle} !text-left text-primary-800`}>
              The State of Application Modernization Report 2022
            </h2>
            <p className={`${paragraphStyle} text-base-800`}>
              Learn why enterprises plan to modernize more than half of their
              existing applications to run on Kubernetes within the next year.
              And see how these 600 companies will approach the move, along with
              other key insights, to inform your modernization strategy.
            </p>
            <IconBox
              title="Read the report"
              icon={<FileText alt="" />}
              url="/modernization-report/"
              className="text-center mt-4"
            />
          </div>
        </div>
      </section>
      <section className="relative before:hidden md:before:flex flex-col w-full items-center z-0 before:z-[-1] before:text-transparent before:absolute before:w-full before:h-[100vw] before:top-[-100px] before:bg-gradient-to-b before:from-base-200 before:to-tertiary-400 dark:before:from-base-100 dark:before:to-tertiary-500 before:rounded-full">
        <div className="page-wrapper">
          <h2 className={headingStyle}>Recent posts</h2>
          <div className="space-y-6 my-12 md:my-16 md:space-x-6 md:space-y-0 w-full flex flex-col md:flex-row">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.frontmatter.title}
                className="md:w-1/3 bg-base-100 group rounded-lg border-2 border-base-500 hover:ring-2 hover:ring-primary-500 focus:ring-2 focus:ring-base-500"
              >
                <HeroImage
                  className="p-3"
                  innerClassName="rounded-md before:text-transparent before:absolute before:rounded-md before:pointer-events-none before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image relative"
                  image={post.frontmatter.image}
                />
                <p className="border-t-2 border-base-400 p-3 text-sm lg:text-base font-medium group-hover:text-primary-700">
                  <span className="line-clamp-3">{post.frontmatter.title}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
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

    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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
              gatsbyImageData(
                layout: CONSTRAINED
                aspectRatio: 2.22
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`
