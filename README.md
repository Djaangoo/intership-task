# Intreship Task

## Installation

install [node ](https://nodejs.org/en/download/) (16.x.x)

install yarn

```bash
npm install --global pnpm
```

install packages

```bash
pnpm install
```

## Scripts

Developer build with HMR

```bash
pnpm dev
```

Lint

```bash
pnpm lint
```

Format (resolve fixable bugs)

```bash
pnpm format
```

Prod Build

```bash
pnpm build
```

Preview Build

```bash
pnpm preview
```

## Tutorial

- Install project
- run: `pnpm dev `
- open [localhost](http://localhost:3000/)
- rest of task will be in the app 😁😁

## Features ( all are optional so feel free and try your best!)

- Mobile first application - ignore desktop view
- basically app should show just temperature, sunrise and sunset. Other infos like if the day is sunny or cloudy, rain, warnings, wind, length of day should be implemented later 🤙
- using geolocation show info about weather of the user location
- searchbar has autocomplete of names of the cities
  - clicking into suggestion open a component which shows info about selected city
  - searchbar remember previous searches
- user can create list of favourites cites
  - app should have drawer with lists of favourites cites
