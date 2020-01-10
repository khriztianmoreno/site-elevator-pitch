require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'khriztianmoreno | FullStack Javascript Developer 👨🏼‍💻👨🏼‍🏫| Producer @commitfm🎙📻',
    url: 'https://khriztianmoreno.dev',
    image: 'https://khriztianmoreno.com/img/profile.jpg',
    language: 'en',
    description: 'FullStack Javascript Developer and Community builder | Producer @commitfm | Co-Organize of @MedellinJS @avanet.',
    socialLinks: {
      github: 'https://github.com/khriztianmoreno',
      twitter: 'https://twitter.com/khriztianmoreno',
      facebook: 'https://facebook.com/khriztianmoreno',
      web: 'https://khriztianmoreno.com',
      mailto: 'mailto:khriztianmoreno@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-screens',
        path: 'content/elevator-pitch/screens',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'elevator-pitch-demo-screens',
    //     path: `${__dirname}/content/screens`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-images',
        path: 'content/elevator-pitch/images',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'elevator-pitch-demo-images',
    //     path: `${__dirname}/content/images`,
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-elevator-pitch'],
      },
    },
  ],
};
