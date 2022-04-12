import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Move2Kube } from '../../images/move2kube.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'

export default function Move2KubePage() {
  const title = 'Konveyor Move2Kube'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Replatform Applications to Kubernetes"
        text="Automate the replatforming of your applications to
        Kubernetes with Move2Kube. With this tool, you can translate
        your source files to Kubernetes artifacts to quickly get
        your workloads running on Kubernetes."
        img={<Move2Kube alt="" />}
      >
        <IconBox title="Documentation" url="#" />
        <IconBox title="Get Started" url="#" dark="true" />
      </Banner>

      <CommunityLinks />
    </>
  )
}
