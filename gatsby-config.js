const prodPlugins = process.env.NODE_ENV === 'production' ? [] : []
const buildEnv = process.env.GATSBY_BUILD_ENV ? process.env.GATSBY_BUILD_ENV : process.env.NODE_ENV

module.exports = {
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: `Konveyor Community`,
    description: `Open source community helping others modernize and migrate apps to the hybrid cloud with open source tools. Practitioners also advise how to deconstruct monoliths and adopt containers and Kubernetes via Konveyor Community meetups.`,
    author: `Konveyor Community`,
    twitterCreator: `konveyor_io`,
    siteUrl: `https://www.konveyor.io`,
    image: `/images/home-social-media.jpg`,
    postsPerPage: 7,
    kubelinter: `https://github.com/stackrox/kube-linter`,
    socialMedia: [
      {
        platform: `facebook`,
        url: `https://www.facebook.com/Konveyor-101588705104317`,
        title: `Visit us on Facebook`,
      },
      {
        platform: `slack`,
        url: `https://kubernetes.slack.com/archives/CR85S82A2`,
        title: `Join us on Slack`,
      },
      {
        platform: `github`,
        url: `https://github.com/konveyor`,
        title: `Check out our GitHub repository`,
      },
      {
        platform: `rss`,
        url: `/rss.xml`,
        title: `Subscribe to our blog feed`,
      },
      {
        platform: `twitter`,
        url: `https://twitter.com/Konveyor_io`,
        title: `Connect with us on Twitter`,
      },
      {
        platform: `youtube`,
        url: `https://www.youtube.com/channel/UCQ3pW3gSBeCy0tj1J0ub2bw`,
        title: `Watch our YouTube channel`,
      },
      {
        platform: `linkedin`,
        url: `https://www.linkedin.com/company/konveyor-community/?viewAsMember=true`,
        title: `Connect with us on LinkedIn`,
      },
    ],
  },
  plugins: [
    ...prodPlugins,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TKPDMS3',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'page_view',
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => buildEnv,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: '/' }],
            sitemap: null,
            host: null,
          },
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
                disallow: ['/blog/application-modernization-report/', '/tags/'],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://gmail.us14.list-manage.com/subscribe/post?u=180317a04b3c2093d37f905a5&amp;id=1d63a6eeb5',
      },
    },
    //`gatsby-plugin-remove-fingerprints`, //Netlify recommends this for performance
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              })
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { fileAbsolutePath: { regex: "/blog/" } }
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Konveyor Community Latest Blog Posts',
          },
        ],
      },
    },
    `gatsby-awesome-pagination`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`, `tags`, `content`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          Mdx: {
            title: (node) => node.frontmatter.title,
            slug: (node) => node.fields.slug,
            description: (node) => node.frontmatter.description,
            tags: (node) => node.frontmatter.tags,
            content: (node) => node.rawBody,
            hidefromsearch: (node) => node.frontmatter.hidefromsearch,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.hidefromsearch !== true,
      },
    },
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve(`./src/templates/page.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              icon: `<svg aria-hidden="true" version="1.1" viewBox="0 0 16 16" ><path fill="currentColor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: 'anchor',
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              className: 'table-of-contents',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2400,
              withWebp: true,
              loading: `lazy`,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false, //messes up when lines wrap
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/src/content/legal`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/src/content/members`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hello-bar`,
        path: `${__dirname}/src/content/hello-bar`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-inline-svg`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Konveyor Community`,
        short_name: `Konveyior`,
        start_url: `/`,
        background_color: `#fff`, //`#663399`,
        theme_color: `#fff`, //`#663399`,
        display: `minimal-ui`,
        icon: `src/images/Konveyor-icon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
