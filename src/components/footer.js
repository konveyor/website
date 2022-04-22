import { Link } from 'gatsby'
import React from 'react'
import SocialMediaIcons from '../components/social-media-icons'
import { ReactComponent as KonveyorLogo } from '../images/Konveyor-logo-color-wh.svg'

export const Footer = () => {
  const listStyle = 'border-b py-3 md:py-0 md:border-0 border-base-500 dark:border-secondary-300'
  return (
    <footer className="bg-primary-800 flex flex-col text-base-100 dark:text-base-800 w-full justify-center dark:bg-primary-200 md:pt-3">
      <section className="page-wrapper flex flex-col w-full justify-between pt-2 pb-8 md:pb-10 lg:pb-4">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:items-center">
          <ul className="flex flex-col md:flex-row justify-between lg:space-x-10 text-base-300 dark:text-primary-700 text-base">
            <li className={listStyle}>&copy;{new Date().getUTCFullYear()} Konveyor</li>
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
      <section className="flex w-full border-t border-base-500 dark:border-secondary-300">
        <div className="flex flex-col w-full page-wrapper my-4 justify-center">
          <KonveyorLogo className="w-32 mb-2" alt="" />
          <span className="sr-only">Konveyor</span>
          <p className="text-base-400 dark:text-secondary-600">
            The Konveyor community helps modernize applications by providing open source tools.
          </p>
        </div>
      </section>
    </footer>
  )
}
