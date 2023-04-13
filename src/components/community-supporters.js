import * as React from 'react'

import CommunityMembers from './community-members'
import IconBox from './iconbox'
import { ArrowRight } from 'react-feather'

export default function CommunitySupporters() {
  const headingStyle =
    'font-headings text-3xl lg:text-5xl text-primary-800 text-center mb-2 lg:mb-4'
  return (
    <>
      <section className="z-0 py-12 md:pt-24 relative dark:before:opacity-60 before:scale-x-[-1] before:z-[-1] before:bg-wave-pattern before:bg-no-repeat before:text-transparent before:w-full before:absolute before:h-full before:top-0 before:bg-left-top">
        <div className="flex flex-col items-center page-wrapper">
          <h3 className={headingStyle}>Community Supporters</h3>
          <CommunityMembers />
          <IconBox
            title="Reach out to become a community supporter"
            url="mailto:konveyorio@gmail.com"
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
    </>
  )
}
