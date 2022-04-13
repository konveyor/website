import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Tackle } from '../../images/tackle.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'

export default function TacklePage() {
  const title = 'Konveyor Tackle'

  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-base-800 text-center mb-2 lg:mb-4'
  const subheadingStyle =
    'font-headings text-xl lg:text-3xl text-base-800 mt-4 mb-2 lg:mt-8 lg:mb-4'
  const ledeStyle =
    'max-w-[60ch] text-xl lg:text-2xl text-base-600 mb-6 max-w-[50ch] md:max-w-none'
  const paragraphStyle =
    'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'
  const projectSectStyle =
    'my-12 lg:mx-12 xl:mx-20 border-b-2 border-primary-200 pb-12 last:border-0 text-center md:text-left'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Assess, Prioritize, and Refactor Applications to Kubernetes"
        text="Streamline the modernization of your application portfolio
      to Kubernetes. Through related tools, Tackle gives you
      insight throughout the adoption process — whether you're
      making decisions at the portfolio or application level."
        img={<Tackle alt="" />}
      >
        <IconBox title="Documentation" url="https://tackle-docs.konveyor.io/" />
        <IconBox
          title="Get Started"
          url="https://tackle-docs.konveyor.io/documentation/doc-installing-and-using-tackle/master/index.html"
          dark="true"
        />
      </Banner>

      <section className="z-0 py-12 md:pt-32 md:pb-40 lg:pt-40 relative dark:after:opacity-60 after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="mb-8 md:mb-0 flex flex-col items-center page-wrapper">
          <h2 className={headingStyle}>
            The Interrelated Tools That Make Tackle
          </h2>
          <p className={`${ledeStyle} text-center md:max-w-[64ch]`}>
            Most of these projects are standalone tools and are being integrated
            over time for a more seamless user experience.
          </p>

          <div className="mt-4 md:mt-8">
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>Tackle Hub</h3>
                  <ul className="list">
                    <li>
                      The central interface from where you manage your
                      application portfolio and integrate with other Tackle
                      tools.
                    </li>
                    <li>
                      Categorize and group your applications by dimensions that
                      make sense for your organization. You can use the
                      prepackaged options or create your own.
                    </li>
                    <li>
                      See which applications are suitable for containerization
                      and find risks with a questionaire-based assessment.
                    </li>
                    <li>
                      Assign priority, display estimated migration effort, and
                      assign actions to indiviual applications.
                    </li>
                    <li>
                      Detect the changes needed to containerize your Java
                      applications with automated analysis. Use existing rules
                      or create your own.
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>Tackle Container Advisor</h3>
                  <p className={paragraphStyle}>
                    Using natural language processing, this tool can analyze a
                    description of your application and suggest the most
                    suitable container image to containerize the application.
                    Analyze up to thousands of non-containerized applications at
                    a time.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle-container-advisor#readme"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>
                    Tackle Configuration Discovery
                  </h3>
                  <p className={paragraphStyle}>
                    Locate and transform configuration files to adapt them to a
                    target&nbsp;runtime.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle-config-discover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>
                    Tackle Data Intensive Validity Advisor (DiVA)
                  </h3>
                  <p className={paragraphStyle}>
                    Analyze the data layer of applications and detect
                    dependencies to different data stores and distributed
                    transactions. Through it's command-line interface, you can
                    import target Java application source files and get analysis
                    results as files.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle-diva"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>
                    Tackle-DiVA Database Operator Adaption (DiVA-DOA)
                  </h3>
                  <p className={paragraphStyle}>
                    Generate Kubernetes resource definitions (YAML files) to
                    help migrate an application with legacy DBMS system to cloud
                    native environment that works with HA DB cluster.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle-diva/tree/main/doa"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>Tackle Test Generator</h3>
                  <p className={paragraphStyle}>
                    Ensure applications behave the same way after being
                    modernized by creating a functional application profile
                    using automatically generated unit tests.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle-test-generator-cli"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={projectSectStyle}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:order-2 md:w-2/5 flex justify-center">
                  <Tackle
                    alt=""
                    className="max-w-[10rem] text-primary-800 dark:text-white"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className={subheadingStyle}>
                    Tackle Data Gravity Insights
                  </h3>
                  <p className={paragraphStyle}>
                    Gain insights into your monolithic application code so that
                    you can better refactor it into domain driven microservices.
                    By analyzing source code, data, and transactional
                    boundaries, this tools helps you discover application
                    domains of interest and refactor them into microservices.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <IconBox
                      title="Learn More"
                      url="https://github.com/konveyor/tackle-data-gravity-insights"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommunityLinks />
    </>
  )
}
