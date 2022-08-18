import { Link } from 'gatsby'
import React from 'react'
import SocialMediaIcons from '../components/social-media-icons'
import { ReactComponent as KonveyorLogo } from '../images/Konveyor-logo-color-wh.svg'
import { ReactComponent as CNCFLogo } from '../images/cncf-white.svg'

export const Footer = () => {
  const listStyle = 'border-b py-3 md:py-0 md:border-0 border-base-500 dark:border-secondary-300'
  return (
    <footer className="bg-primary-800 flex flex-col text-base-100 dark:text-base-800 w-full justify-center dark:bg-primary-200 md:pt-3">
      <section className="page-wrapper flex flex-col w-full justify-between pt-2 pb-8 md:pb-10 lg:pb-4">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:items-center">
          <ul className="flex flex-col md:flex-row justify-between lg:space-x-10 text-base-300 dark:text-primary-700 text-base">
            <li className={listStyle}>&copy;{new Date().getUTCFullYear()} the Konveyor authors</li>
            <li className={listStyle}>
              <Link
                className="underline hover:text-base-200 dark:hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-base-200 dark:focus:ring-secondary-900"
                to="/privacy/"
              >
                Privacy Statement
              </Link>
            </li>
          </ul>
          <div className="mt-8 lg:mt-0 rounded flex border lg:border-0 border-base-500 dark:border-secondary-400 p-3 lg:p-0 items-center justify-between space-x-4 ">
            <span className="md:flex lg:hidden text-base-400 dark:text-secondary-600 space-x-1">
              <span className="hidden md:flex font-semibold">Reach out to us on </span>
              <span className="flex md:hidden font-semibold">Social:</span>
              <span className="hidden md:flex font-semibold">social media:</span>
            </span>
            <SocialMediaIcons />
          </div>
        </div>
      </section>
      <section className="page-wrapper flex flex-col md:flex-row w-full gap-8 lg:gap-12 border-t border-base-500 dark:border-secondary-300 py-4">
        <div className="md:w-1/2 flex flex-col">
          <KonveyorLogo className="w-32 mb-2" alt="" />
          <span className="sr-only">Konveyor</span>
          <p className="text-base-400 dark:text-secondary-600">
            The Konveyor community helps modernize applications by providing open source tools.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <CNCFLogo className="w-60 h-fit mt-2 mb-3" alt="" />
          <span className="sr-only">Cloud Native Computing Foundation</span>
          <p className="text-base-400 dark:text-secondary-600">
            We are a Cloud Native Computing Foundation sandbox project.
          </p>
        </div>
      </section>
      <section className="page-wrapper flex flex-col w-full pt-4 pb-8">
        <p className="text-sm text-base-400 dark:text-secondary-600">
          The Linux Foundation® (TLF) has registered trademarks and uses trademarks. For a list of
          TLF trademarks, see{' '}
          <a
            href="https://www.linuxfoundation.org/trademark-usage/"
            className="underline hover:text-base-200 dark:hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-base-200 dark:focus:ring-secondary-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trademark Usage
          </a>
          .
        </p>
      </section>
    </footer>
  )
}
