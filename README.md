# Assignment - AU Webpage from wireframe

## Built with GatsbyJS (React) & Sass (CSS Grid and Flexbox mainly)

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
3. run `gatsby develop` to run the app locally in development mode on `http://localhost:8000`. Run `gatsby build` to run the App in build mode locally.
