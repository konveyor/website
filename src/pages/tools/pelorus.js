import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Pelorus } from '../../images/pelorus.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'
import { ReactComponent as Icon } from '../../images/pelorus-icon.svg'
import SignUpForm from '../../components/sign-up-form'

export default function PelorusPage() {
  const title = 'Konveyor Pelorus'

  const subheadingStyle =
    'font-headings text-xl lg:text-3xl text-primary-800 mt-4 mb-2 lg:mt-8 lg:mb-4'
  const pStyle = 'mb-4 text-base lg:text-lg text-base-600 lg:leading-relaxed'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Measure Software Delivery Performance on Kubernetes"
        text="Pelorus helps IT teams measure the impact of application modernization on their organization's overall performance. The open source tool Pelorus does this by gathering metrics in key IT areas that have been proven to impact the value they deliver to the organization."
        img={<Pelorus alt="" />}
      >
        <p className={`${pStyle} italic`}>
          Only compatible with OpenShift at the moment. Work in progress to support upstream
          Kubernetes compatibility. See why compatibility hasn’t been established yet and what the
          status is in this{' '}
          <a
            href="https://github.com/konveyor/pelorus/issues/328"
            className={aStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub issue
          </a>
          .
        </p>
        <IconBox title="Documentation" url="https://pelorus.readthedocs.io/en/latest/" />
        <IconBox title="Get Started" url="https://pelorus.readthedocs.io/en/latest/Install/" dark="true" />
      </Banner>

      <section className="z-0 pt-12 pb-32 md:pt-24 md:pb-40 relative dark:after:opacity-60 after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="mb-8 md:mb-0 flex flex-col items-center page-wrapper">
          <div className="flex flex-col md:flex-row gap-0 md:gap-12">
            <div className="md:order-2 md:w-2/5 flex justify-center">
              <Icon alt="" className="max-w-[15rem] text-primary-800" />
            </div>
            <div className="md:w-3/5">
              <h3 className={subheadingStyle}>
                Key metrics Pelorus can focus around Software Delivery Performance are:
              </h3>
              <ul className="list">
                <li>Lead time for change</li>
                <li>Deployment frequency</li>
                <li>Mean time to restore</li>
                <li>Change failure rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CommunityLinks />

      <SignUpForm />
    </>
  )
}
