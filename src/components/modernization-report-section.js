import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import IconBox from './iconbox'
import { FileText } from 'react-feather'

export default function ModernizationReport({ headingStyle, paragraphStyle }) {
  return (
    <>
      <section className="z-1 my-12 md:my-24 page-wrapper">
        <div className="w-full rounded-2xl mt-10 md:mt-16 md:mb-8 lg:mb-24 border-2 border-base-400 bg-primary-200 dark:bg-base-300 p-4 md:p-8 xl:p-16 flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-16">
          <a href="/modernization-report/">
            <StaticImage
              src="../images/report-2024-cover.png"
              alt="State of Application Modernization with the Konveyor Community cover"
              className="rounded-lg w-40 md:w-auto self-center md:self-start"
              width="1028"
            />{' '}
            <p className="sr-only">Read the report</p>
          </a>
          <div>
            <h2 className={`${headingStyle} !text-left text-primary-800`}>
              The State of Application Modernization Report 2024
            </h2>
            <p className={`${paragraphStyle} text-base-800`}>
            Learn how organizations plan to approach application modernization and migration—and what they consider success to look like. In all,
            1,000 responses were gathered with half coming from the US and the balance split evenly between the United Kingdom (UK) and English-speaking Asia-Pacific (APAC).
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
    </>
  )
}
