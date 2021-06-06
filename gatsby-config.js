module.exports = {
  siteMetadata: {
    title: `比特信箱`,
    description: `中小平台IM解决方案`,
    author: `bitmsgbox team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-code-buttons`,
            options: {
              tooltipText: 'Copy'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "host",
                global: false,
              },
            },
          },
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-no-sourcemaps`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-QY87EJ0GB4", // Google Analytics id for goodguy.site
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          exclude: [],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
