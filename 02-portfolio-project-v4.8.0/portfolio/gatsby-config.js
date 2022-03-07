/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Portfolio",
    description: "A detailed individual portfolio",
    titleTemplate: `%s | Portfolio`,
    url: `https://mdbytes-portfolio.netlify.app`,
    twitterUsername: `@mdbytes`,
    image: `/main-image.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
