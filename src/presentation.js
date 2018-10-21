// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
const fs = require('fs')

const theme = createTheme(
  {
    primary: '#151515',
    secondary: '#FFF',
    tertiary: '#FF0',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const component = `import React, { Component } from 'react'

class presentation extends Component {
  render () {
    return (
      <Container />
    )
  }
}

export default presentation`

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            React and Redux
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            state management is hard
          </Text>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>First note</li>
              <li>Second note</li>
            </ol>
          </Notes>
        </Slide>
        <CodeSlide
          bgColor='primary'
          code={component}
          lang='js'
          ranges={[{ loc: [0, 1] }, { loc: [2, 9] }, { loc: [10, 11] }]}
        />
      </Deck>
    )
  }
}
