module.exports = {
  siteMetadata: {
    title: 'Cosmos Leather BD',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      option: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
