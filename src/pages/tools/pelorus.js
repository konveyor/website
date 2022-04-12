import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Pelorus } from '../../images/pelorus.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'

export default function PelorusPage() {
  const title = 'Konveyor Pelorus'

  const pStyle = 'mb-4 text-base lg:text-lg text-base-600 lg:leading-relaxed'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Measure Software Delivery Performance on Kubernetes"
        text="Prove the value of modernization. With the Pelorus tool, you
        can measure the key metrics to software delivery performance
        (lead time for change, deployment frequency, mean time to
        restore, and change failure rate) and enable metrics driven
        transformation."
        img={<Pelorus alt="" />}
      >
        <p className={`${pStyle} italic`}>
          Only compatible with OpenShift at the moment. Work in progress to
          support upstream Kubernetes compatibility. See why compatibility
          hasn’t been established yet and what the status is in this{' '}
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
        <IconBox title="Documentation" url="#" />
        <IconBox title="Get Started" url="#" dark="true" />
      </Banner>

      <CommunityLinks />
    </>
  )
}
