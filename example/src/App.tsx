import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Grid, Cell as BaseCell, BREAKPOINTS } from '@mollycule/lattice'

const Cell = styled(BaseCell)`
  /* min-width: 100px; */
  min-height: 50px;
  text-align: center;
  background: mediumslateblue;
  color: white;
  line-height: 100%;
  font-family: sans-serif;
  width: 100%;
  height: 100%;

  overflow: hidden;
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
      <Cell>3</Cell>
      <Cell x-span={{ sm: '2', md: '1' }}>4</Cell>
    </Grid>
  </ThemeProvider>
)

export default App
