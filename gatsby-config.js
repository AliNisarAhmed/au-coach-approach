module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    verticalPanels: [
      {
        title: `After our two weeks together, you will have`,
        goals: [
          `Clearer understanding of contemporary leadership including the coaching approach;`,
          `Enhanced abilities in delegating, coaching and mentoring;`,
          `Improved knowledge in managing reponsibilities, expectations and performance;`,
          `Practical tools for empowering your team; and`,
          `Increased inner motivation, engagement, collboration and giving/receiving feedback.`,
        ],
      },
      {
        title: `Please be mindful of a couple of course expectations`,
        goals: [
          `Clearer understanding of contemporary leadership including the coaching approach;`,
          `Enhanced abilities in delegating, coaching and mentoring;`,
          `Improved knowledge in managing reponsibilities, expectations and performance;`,
          `Practical tools for empowering your team; and`,
          `Increased inner motivation, engagement, collboration and giving/receiving feedback.`,
        ],
      },
    ],
    courseOutline: [
      {
        weekNumber: 1,
        modules: [
          `A Portrait of an Exceptional Leader and Leadership Basics`,
          `Coach Approach - Coaching skills from a Leader's perspective`,
        ],
      },
      {
        weekNumber: 2,
        modules: [
          `A Portrait of an Exceptional Leader and Leadership Basics`,
          `Coach Approach - Coaching skills from a Leader's perspective`,
        ],
      },
      {
        weekNumber: 3,
        modules: [
          `A Portrait of an Exceptional Leader and Leadership Basics`,
          `Coach Approach - Coaching skills from a Leader's perspective`,
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
