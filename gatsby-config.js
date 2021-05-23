module.exports = {
    siteMetadata: {
        title: `比特信箱`,
        description: ``,
        author: `bitmsgbox team`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `images`,
        //         path: `${__dirname}/static/images`,
        //     },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `bitmsgbox(比特信箱)`,
        //         short_name: `bitmsgbox`,
        //         start_url: `/`,
        //         background_color: `#663399`,
        //         theme_color: `#FF54AC`,
        //         display: `minimal-ui`,
        //         icon: `${__dirname}/static/images/logo512.png`, // This path is relative to the root of the site.
        //     },
        // },
        `gatsby-plugin-sass`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
