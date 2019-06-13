# Assignment - AU Webpage from wireframe

## Built with GatsbyJS (React) & Sass (CSS Grid and Flexbox mainly)

**Note: `fixed` branch contains 3 changes to the `master` branch.**

1. fixed the large FontAwesomeIcons on initial load by importing fontAwesome css directly in `index.js`, this allows css to load before the icon is displayed.
2. fixed unnecessary `left-padding` on nav on mobile screens.
3. fixed the outline page, allowing it to occupy 95% of its parent, thus giving it more space.

### Project webpage

The deployed project webpage can be seen on [here](https://au-coach-approach.netlify.com/)

The `fixed` branch can be seen on [here](https://au-coach-approach2.netlify.com/)

### Navigating project files

- Start from `src/sections/layout.js`, which lists all the sections of the page, and provides the overall skeleton layout of the page, (The Header and Footer sections are already included in `layout.js`)
- Each section has its corresponding Sass file in `src/styles/sections`. Thus, for example, in `src/styles/sections/_layout.scss` the main page skeleton has been built using CSS Grid and shows main sections of the page.
- Reusable markup has been extracted away into `src/components`, with corresponding style files in `src/styles/components`.
- `src/pages` contains different pages which can be navigated. The current main page is displayed from `src/pages/index.js`.
- `src/styles/_pageStyles.scss` contains global styles.
- `src/styles/main.scss` compiles all the Sass Files.

### Running Locally

1. clone the repo
2. `cd` into the repo and `npm install`
3. run `gatsby develop` to run the app locally in development mode on `http://localhost:8000`. Run `gatsby build` to get a production build and then run `gatsby serve` to run the production build locally.
