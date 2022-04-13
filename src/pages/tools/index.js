import React from 'react'
import Seo from '../../components/seo'
import { Link } from 'gatsby'
import { ReactComponent as Crane } from '../../images/crane.svg'
import { ReactComponent as Move2Kube } from '../../images/move2kube.svg'
import { ReactComponent as Tackle } from '../../images/tackle.svg'
import { ReactComponent as Forklift } from '../../images/forklift.svg'
import { ReactComponent as Pelorus } from '../../images/pelorus.svg'

export default function ToolsPage() {
  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-base-800 mb-2 lg:mb-4'
  const paragraphStyle =
    'max-w-[60ch] text-center text-lg lg:text-xl text-base-600 mb-4'

  const LogoBox = ({ ...props }) => {
    const { title, url, icon } = props

    return (
      <Link
        className="w-full md:w-56 rounded-lg border-base-400 border-2 p-4 md:p-6 flex flex-col justify-center items-center bg-base-100 hover:border-base-500 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary-600"
        to={url}
      >
        <div className="h-32 mb-4">{icon}</div>
        {title && <p className="text-base font-semibold">{title}</p>}
      </Link>
    )
  }

  return (
    <>
      <Seo title="The Konveyor Tool Suite" />
      <div className="overflow-hidden bg-base-200 text-center py-12 md:py-16 lg:pb-24">
        <div className="flex flex-col items-center gap-32 page-wrapper">
          <section className="flex flex-col w-full items-center text-center relative z-0">
            <h1 className={headingStyle}>The Konveyor Tool Suite</h1>
            <p className={paragraphStyle}>
              Through separate migration tools, the Konveyor Tool Suite
              streamlines the modernization and migration of existing
              applications to Kubernetes across a range of use cases. Explore
              the Konveyor tools.
            </p>
            <div className="mt-16 mb-12 w-full flex flex-wrap gap-6 md:gap-8 justify-center">
              <LogoBox
                title="Rehost Applications Between Kubernetes Clusters"
                url="/tools/crane/"
                icon={
                  <Crane
                    alt="Konveyor Crane"
                    className="text-primary-800 dark:text-white"
                  />
                }
              />
              <LogoBox
                title="Replatform Applications to Kubernetes"
                url="https://move2kube.konveyor.io/"
                rel="noopener noreferrer"
                target="_blank"
                icon={
                  <Move2Kube
                    alt="Konveyor Move2Kube"
                    className="text-primary-800 dark:text-white"
                  />
                }
              />
              <LogoBox
                title="Assess, Prioritize, and Refactor Applications to Kubernetes
                "
                url="/tools/tackle/"
                icon={
                  <Tackle
                    alt="Konveyor Tackle"
                    className="text-primary-800 dark:text-white"
                  />
                }
              />
              <LogoBox
                title="Rehost your Virtual Machines (VMs) to KubeVirt"
                url="/tools/forklift/"
                icon={
                  <Forklift
                    alt="Konveyor Forklift"
                    className="text-primary-800 dark:text-white"
                  />
                }
              />
              <LogoBox
                title="Measure Software Delivery Performance on Kubernetes"
                url="/tools/pelorus/"
                icon={
                  <Pelorus
                    alt="Konveyor Pelorus"
                    className="text-primary-800 dark:text-white"
                  />
                }
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
