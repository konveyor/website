import React from 'react'

const CardHeader = ({ children }) => {
  return (
    <header className="mb-6 h-20 flex flex-col justify-center text-center font-headings text-2xl lg:text-3xl text-black dark:text-white">
      {children}
    </header>
  )
}

const CardBody = ({ children }) => {
  return (
    <p className="mb-4 text-base lg:text-lg text-base-600 lg:leading-relaxed">
      {children}
    </p>
  )
}

const CardFooter = ({ children }) => {
  return (
    <p className="mt-auto text-center text-lg lg:text-xl text-base-600 lg:leading-relaxed">
      {children}
    </p>
  )
}

const CardLink = ({ href, children }) => {
  return (
    <a
      className="underline font-semibold text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700"
      href={href}
      rel="noopener noreferrer"
      target={href.indexOf('https://') === 0 ? '_blank' : '_self'}
    >
      {children}
    </a>
  )
}

const Card = ({ children }) => {
  return (
    <div className="basis-80 grow md:grow-0 rounded-2xl border-2 border-base-400 bg-base-100 p-4 md:p-6 flex flex-col justify-start">
      {children}
    </div>
  )
}

const Root = Card
const Header = CardHeader
const Body = CardBody
const Footer = CardFooter
const Link = CardLink

export { Card, Root, Header, Body, Footer, Link }
