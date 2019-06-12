module.exports = {
  siteMetadata: {
    title: `Athabasca University. Open, Online, Everywhere`,
    description: `Coach Approach for Leadership Development`,
    author: `@AliNisarAhmed`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
