import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import HeroImage from './hero-image'

export default function RecentPosts({ headingStyle, posts }) {
  return (
    <section className="relative overflow-hidden pt-20 before:hidden md:before:flex flex-col w-full items-center z-0 before:z-[-1] before:text-transparent before:absolute before:w-full before:h-[100vw] before:top-0 before:bg-gradient-to-b before:from-base-200 before:to-tertiary-400 dark:before:from-base-100 dark:before:to-tertiary-500 before:rounded-full">
      <div className="page-wrapper">
        <h2 className={headingStyle}>Recent posts</h2>
        <div className="space-y-6 my-12 md:my-16 md:space-x-6 md:space-y-0 w-full flex flex-col md:flex-row">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.frontmatter.title}
              className="md:w-1/3 bg-base-100 group rounded-lg border-2 border-base-500 hover:ring-2 hover:ring-primary-500 focus:ring-2 focus:ring-base-500"
            >
              <HeroImage
                className="p-3"
                innerClassName="rounded-md before:text-transparent before:absolute before:rounded-md before:pointer-events-none before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image relative"
                image={post.frontmatter.image}
              />
              <p className="border-t-2 border-base-400 p-3 text-sm lg:text-base font-medium group-hover:text-primary-700">
                <span className="line-clamp-3">{post.frontmatter.title}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
