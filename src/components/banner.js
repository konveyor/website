import React from 'react'

const Banner = ({ title, header, text, img, children }) => {
  return (
    <section className="bg-base-200 py-12 md:py-20 lg:py-24">
      <h1 className="sr-only">{title}</h1>
      <div className="page-wrapper flex flex-col md:flex-row gap-12">
        <div className="md:order-2 md:w-2/5 flex justify-center text-primary-800 dark:text-white">
          <div className="max-h-40 md:max-h-64 lg:max-h-72">{img}</div>
        </div>
        <div className="md:w-3/5">
          <h2 className="font-headings text-3xl lg:text-5xl text-primary-800 mb-2 lg:mb-4">
            {header}
          </h2>
          <p className="mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none">
            {text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default Banner
