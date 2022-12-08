module.exports = {
  siteMetadata: {
    title: 'Sungrown Farms',
    description: 'Land leases and licensing for cannabis farms in Washington state',
    url: 'https://www.sungrownfarms.net',
    image: '/sungrown-drone.jpg',
    author: '@alecspringel',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sungrown Farms',
        short_name: 'Sungrown Farms',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'browser',
        icon: 'src/images/manifest/32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.DEPLOY_ENV === 'prod' ? 'sungrownfarms.com' : 'sungrownfarms.com-dev',
      },
    },
  ],
};
