module.exports = {
  siteMetadata: {
    title: "BorderLine",
    description:
      "Visit our page to explore awesome places and discover what makes each of them unique. Get out of your comfort zone and say yes to adventure.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
