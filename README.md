# @mollycule/lattice

> CSS Grid based layout renderer based on styled-components and styled-system

<!-- PROJECT SHIELDS -->

[![Build Status][build-shield]]()
[![MIT License][license-shield]][license-url]
[![Contributors][contributors-shield]]()
<img src="https://img.badgesize.io/paramsinghvc/lattice/master/dist/index.js?style=for-the-badge&compression=gzip&label=gzip+size&max=3000&softmax=2000">
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/paramsinghvc/lattice">
    <img src="https://user-images.githubusercontent.com/4329912/89673107-b5577080-d8dd-11ea-8938-532de92ba781.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lattice</h3>

  <p align="center">
    CSS Grid based layout renderer based on styled-components and styled-system
    <br />
    <a href="https://www.npmjs.com/package/@mollycule/lattice"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codesandbox.io/s/mollycule-lattice-demo-m4olk?fontsize=14">View Demo</a>
    ·
    <a href="https://github.com/paramsinghvc/lattice/issues">Report Bug</a>
    ·
    <a href="https://github.com/paramsinghvc/lattice/issues">Request Feature</a>
    .
    <a href="https://www.npmjs.com/package/@mollycule/lattice">NPM Link</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

**`Lattice`** is a standard CSS Grid approach to create make layouting a breeze in your React apps.

It has support for making bootstrap like responsive layouts very easily in CSS in JS ecosystems, making it very suitable for modern day React ecosystem
<img src="https://user-images.githubusercontent.com/4329912/89674290-cdc88a80-d8df-11ea-9ef0-9345bb509f98.png" alt="Logo">

### Built With

- [Styled Components](https://styled-components.com/) 💅
- [Styled System](https://styled-system.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Create React Library](https://www.npmjs.com/package/create-react-library)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Following Peer Dependencies are required for using uselattice package:

- react: "^16.0.0"

## Install

```bash
npm install --save @mollycule/lattice

yarn add @mollycule/lattice
```

## Usage

```tsx
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Grid, Cell as BaseCell, BREAKPOINTS } from '@mollycule/lattice'

const Cell = styled(BaseCell)`
  min-height: 50px;
  background: mediumslateblue;
  color: white;
`

const App = () => (
  <ThemeProvider theme={{ breakpoints: BREAKPOINTS }}>
    <Grid
      width='70vw'
      mx='auto'
      gap='3px'
      cols={{ xs: 2, sm: 3, md: 4 }}
      height='500px'
      alignContent='center'
      alignItems='center'
      justifyContent='center'
      justifyItems='start'
    >
      <Cell x-offset='3' x-span='2'>
        1
      </Cell>
      <Cell y-offset={{ sm: '2', md: '1' }} y-span={{ sm: '1', md: '2' }}>
        2
      </Cell>
      <Cell>
        <Box pt='5px' fontWeight='bold' color='aqua'>
          3
        </Box>
      </Cell>
      <Cell x-span={{ sm: '2', md: '1' }}>4</Cell>
    </Grid>
  </ThemeProvider>
)
```

The library exports Grid, Cell and a general usage Box for general use divs. Using these, there won't be a need of writing a styled component ever. All the particular styles can be inlined by virtue of styled-system properties.

The styled components being extendable makes the generic Box component to be wrapped around for more specific frequently used elements when needed.

# API

## Grid Props

| Prop Name      | Value Type       | Example                                               | Mapped CSS property     |
| -------------- | ---------------- | ----------------------------------------------------- | ----------------------- |
| gap            | string           | `gap='2px'`                                           | `grid-gap`              |
| rowGap         | string           | `rowGap='2px'`                                        | `grid-row-gap`          |
| columnGap      | string           | `columnGap='2px'`                                     | `grid-column-gap`       |
| alignItems     | string           | `alignItems='center'`                                 | `align-items`           |
| alignContent   | string           | `alignContent='center'`                               | `align-content`         |
| justifyItems   | string           | `justifyItems='center'`                               | `justify-items`         |
| justifyContent | string           | `justifyContent='center'`                             | `justify-content`       |
| cols           | number or string | `cols={2}` or `cols='repeat(3, minmax(200px, auto))'` | `grid-template-columns` |
| flow           | string           | `flow='row'`                                          | `grid-auto-flow`        |
| areas          | string[]         | `areas={['a a b', 'c c b']}'`                         | `grid-template-areas`   |

## Cell Props

| Prop Name | Value Type | Example        | Mapped CSS property |
| --------- | ---------- | -------------- | ------------------- |
| area      | string     | `area='a'`     | `grid-area`         |
| x-offset  | string     | `x-offset='2'` | `grid-column-start` |
| x-span    | string     | `x-span='2'`   | `grid-column-end`   |
| y-offset  | string     | `y-offset='3'` | `grid-row-start`    |
| y-span    | string     | `y-span='2'`   | `grid-row-end`      |

All the above property values are responsive compatible, which can be specified based on the [breakpoints](https://styled-system.com/responsive-styles#using-objects) approach of styled-system. A default breakpoint is also exported from the library based on Bootstrap responsive system.

```
export const BREAKPOINTS = {
  xs: 0,
  sm: '480px',
  md: '768px',
  lg: '1024px'
}
```

Note: Please use string values most of the time in order to prevent automatic suffixing of numeric values by 'px' in React as these custom properties don't fall under React [unitless properties](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59).

## License

MIT © [paramsinghvc](https://github.com/paramsinghvc)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Param Singh - [@paramsinghvc](https://github.com/paramsinghvc) - paramsinghvc@gmail.com

Project Link: [https://github.com/paramsinghvc/lattice](https://github.com/paramsinghvc/lattice)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Styled CSS Grid](https://styled-css-grid.js.org/)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=for-the-badge
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077B5
[linkedin-url]: https://www.linkedin.com/in/paramsinghvc
[product-screenshot]: https://user-images.githubusercontent.com/4329912/57970750-b895d200-79a2-11e9-9fdf-fcf80c8fce28.png
