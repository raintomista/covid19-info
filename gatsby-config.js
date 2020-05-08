module.exports = {
  siteMetadata: {
    title: `COVID-19 Info`,
    description: `Stay at home quarantine to stop coronavirus`,
    author: `@raintomista`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@images": "src/images",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@sass": "src/sass",
          "@templates": "src/templates",
          "@posts": "content/posts",
        },
        extensions: []
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Red Hat Display`,
            variants: [`400`, `500`, `600`, `700`, `800`, '900'],
          },
          {
            family: `Lato`,
            variants: [`400`, `500`, `600`, `700`, `800`, '900'],
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}