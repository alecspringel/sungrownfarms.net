module.exports = {
  siteMetadata: {
    title: 'Sungrown Farms',
    description: 'Land leases and licensing for cannabis businesses in Washington state',
    url: 'http://sungrownfarms.com-dev.s3-website-us-west-2.amazonaws.com',
    image: '/meta-img.jpg',
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
        description: 'Land leases and licensing for cannabis businesses in Washington state',
        start_url: '/',
        background_color: '#4C4C4C',
        theme_color: '#4C4C4C',
        display: 'browser',
        icon: 'src/images/manifest/512x512.png', // This path is relative to the root of the site.
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
