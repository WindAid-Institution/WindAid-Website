module.exports = {
  siteMetadata: {
    title: "WindaidInstitute",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\::300,400,500,600,700,800,900`],
        display: "swap",
      },
    },
  ],
};
