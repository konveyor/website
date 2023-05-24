import { graphql, Link } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import { ReactComponent as Slack } from '../images/slack-icon.svg'
import { ReactComponent as HomeBanner } from '../images/konveyorhome.svg'
import { ReactComponent as Konveyor } from '../images/Konveyor-logo-color.svg'
import { ReactComponent as KonveyorWh } from '../images/Konveyor-logo-color-wh.svg'
import { ReactComponent as CNative } from '../images/cncf-white.svg'
import IconBox from '../components/iconbox'
import WidowControl from '../components/widow-control'
import CommunityLinks from '../components/community-links'
import SignUpForm from '../components/sign-up-form'
import CommunitySupporters from '../components/community-supporters'
import ModernizationReport from '../components/modernization-report-section'
import RecentPosts from '../components/recent-posts'
import Bubbles from '../components/bubbles'

export default function IndexPage({ data }) {
  const posts = data.recentPosts.nodes
  const slack = data.site.siteMetadata.socialMedia.filter((media) => media.platform === 'slack')[0]
    .url

  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-primary-800 text-center mb-2 lg:mb-4'
  const ledeStyle =
    'max-w-[60ch] font-bold text-xl lg:text-2xl text-bold mb-6 max-w-[50ch] md:max-w-none'
  const paragraphStyle =
    'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'
  const projectSectStyle =
    'my-12 lg:mx-12 xl:mx-20 border-b-2 border-primary-200 pb-12 last:border-0 text-center md:text-left'

  const features = [
    `Konveyor Hub: Central interface from where you manage your application
    portfolio and integrate with other Tackle tools.`,
    `Categorize and group applications by different dimensions
    (pre-packaged or custom) aligned with technical criteria or your
    organization structure.`,
    'Assess applications containerization suitablity and risks assessment.',
    `Assign priority, assess estimated migration effort, and define optimal
    migration strategy for individual applications.`,
    `Evaluate required changes for Java applications containerization
    through automated analysis (pre-packaged or custom rules).`,
    `Fully integrated Konveyor Data Intensive Validity Advisor (DiVA): Analyzes
    the data layer of applications and detect dependencies to different data
    stores and distributed transactions. Import target Java application
    source files to generate analysis results.`,
  ]

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
              The Konveyor community helps modernize applications by providing open source tools to
              rehost, replatform, and refactor applications to Kubernetes and cloud-native
              technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <IconBox title="Get Community Updates" url="#sign-up" />
              <IconBox
                title="Join our Slack Group"
                url={slack}
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

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center space-x-4 my-2 md:max-h-[3em]">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-headings text-xl break-keep md:text-2xl text-center text-base-100">
              Konveyor is a
            </h3>
          </div>
          <div className="flex-none justify-center items-center w-2/5 py-2 md:w-1/5 lg:w-1/6 md:max-h-[5em]">
            <CNative />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="font-headings text-2xl md:text-2xl text-base-100">Sandbox project</h3>
          </div>
        </div>
      </section>

      <section className="z-0 py-8 md:pb-40 lg:pt-40 relative dark:after:opacity-60 after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="mb-8 md:mb-0 flex flex-col items-center page-wrapper">
          <h2 className={headingStyle}>The Konveyor Tool Kit</h2>

          <div className="mt-4 md:mt-8">
            <div className={projectSectStyle}>
              <h3 className="sr-only">
                Assess, Prioritize, and Refactor Applications to Kubernetes
              </h3>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5">
                  <Konveyor alt="" className="text-primary-800 dark:hidden" />
                  <KonveyorWh className="hidden dark:block" />
                </div>
                <div className="md:w-3/5">
                  <p className={ledeStyle}>
                    Assess, Prioritize, and Refactor Applications to Kubernetes
                  </p>
                  <p className={paragraphStyle}>
                    Streamline the modernization of your application portfolio to Kubernetes. The
                    Konveyor tool gives you insight throughout the migration process - whether
                    you're making decisions at the portfolio or application level.
                  </p>
                </div>
              </div>
              <div className="pt-12">
                <h4 className="font-bold text-xl text-primary-800 mb-8">Feature set</h4>
                <ul className="list mb-4 md:w-1/2">
                  {features.map((feature, index) => (
                    <li key={index} className={[paragraphStyle, 'py-8']}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <IconBox
                    title="Get Started"
                    url="https://konveyor.github.io/konveyor/installation/"
                    dark="true"
                  />
                  <IconBox title="Github Repo" url="https://github.com/konveyor/tackle2-operator" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bubbles />
      </section>

      <CommunityLinks />

      <CommunitySupporters />

      <ModernizationReport headingStyle={headingStyle} paragraphStyle={paragraphStyle} />

      <SignUpForm />

      <RecentPosts headingStyle={headingStyle} posts={posts} />
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
