const dotenv = require('dotenv').config()

const cfg = {
  siteMetadata: {
    title: `Blog`,
    author: `Jeffrey Bosch`,
    description: `Personal blog by Jeffrey Bosch.`,
    siteUrl: `https://jefiozie.github.io`,
    social: {
      twitter: `jefiozie`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '÷',
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131765206-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog - Jeffrey`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2bbc8a`,
        display: `standalone`,
        icon: `content/assets/favicon-96x96.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}

if (process.env.CONTEXT !== 'production') {
  const draftsCfg = {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/drafts`,
    },
  }
  cfg.plugins.push(draftsCfg)
}
module.exports = cfg
