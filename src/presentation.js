import React from 'react'
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Layout,
  Text,
  Image,
  Code,
  SlideSet,
  Fill,
  ComponentPlayground,
  S
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import createTheme from 'spectacle/lib/themes/default'
import styled from 'styled-components'

require('normalize.css')
const fs = require('fs')

const buttonExample = `
const Button = ({label}) => <div style={{width: 200, height: 80, backgroundColor: 'palevioletred'}} />
//note to me, do props stuff
render(<Button label='Press Me'/>)
`

const theme = createTheme(
  {
    primary: '#FFF',
    alt: '#a5a1b9',
    secondary: '#DF56F1',
    background: '#141028',
    quartenary: '#4B2D99'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const component = `import React, { Component } from 'react'

class List extends Component {
  render () {
    return (
      <div />
    )
  }
}

export default List`

const functional = `import React from 'react'
          
const Functional = props => <div />

export default Functional`

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['zoom']}
          bgColor='primary'
          bgImage='splash.jpg'
          bgDarken={0.8}
        >
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            React and Redux
          </Heading>
        </Slide>
        <CodeSlide
          bgColor='background'
          code={component}
          lang='js'
          style={{ height: '900px' }}
          ranges={[
            {
              loc: [0, 1],
              title: 'Components',
              note: 'get the imports out of the way'
            },
            { loc: [2, 9], note: 'this is not html' },
            { loc: [10, 11], note: 'what does this do?' }
          ]}
        />
        <Slide bgColor='background'>
          <Heading size={2} caps textColor='alt'>
            Mounting
          </Heading>
          {[
            'constructor()',
            'static getDerivedStateFromProps()',
            'render()',
            'componentDidMount()'
          ].map(method => (
            <Appear>

              <Heading
                textFont='primary'
                textColor='white'
                size={5}
                style={{ paddingBottom: 40, paddingTop: 10 }}
              >
                {method}
              </Heading>
            </Appear>
          ))}
        </Slide>
        <Slide bgColor='background'>
          <Heading size={2} textColor='alt'>
            Updating
          </Heading>
          {[
            'static getDerivedStateFromProps()',
            'shouldComponentUpdate()',
            'render()',
            'getSnapshotBeforeUpdate()',
            'componentDidMount()'
          ].map(method => (
            <Appear>
              <Heading
                textFont='secondary'
                textColor='primary'
                size={5}
                style={{ paddingBottom: 40, paddingTop: 10 }}
              >
                {method}
              </Heading>
            </Appear>
          ))}
        </Slide>
        <Slide bgColor='background'>
          <Heading size={2} textColor='alt'>
            Unmounting
          </Heading>
          {['componentWillUnmount()'].map(method => (
            <Appear>
              <Heading
                textFont='primary'
                textColor='white'
                size={5}
                style={{ paddingBottom: 40, paddingTop: 10 }}
              >
                {method}
              </Heading>
            </Appear>
          ))}
          <Appear>
            <Text
              size={6}
              style={{ lineHeight: 2 }}
              textFont='secondary'
              textColor='primary'
            >
              only guaranteed to be called if componentDidMount() has happened
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor='background'>
          <Heading textColor='alt'>what do most people use?</Heading>
          <Layout>
            <Appear>
              <Fill>
                <Text textColor='primary'>componentDidMount()</Text>
                <Text textColor='primary'>render()</Text>
                <Text textColor='primary'>componentWillUnmount()</Text>
                <Text textColor='primary'>
                  shouldComponentUpdate() - rarely
                </Text>
                <Appear>
                  <Heading size={4} caps textColor='secondary' />
                </Appear>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide bgColor='background'>
          <Appear>
            <Heading size={1} textColor='primary'>
              Functional Components
            </Heading>
          </Appear>
          <Appear>
            <Heading
              textFont='secondary'
              textColor='primary'
              size={5}
              style={{ paddingBottom: 40, paddingTop: 10 }}
            >
              no lifecycle methods
            </Heading>
          </Appear>
        </Slide>
        <CodeSlide
          bgColor='background'
          lang='js'
          code={functional}
          ranges={[
            { loc: [0, 5], title: 'Functional Component' },
            {
              loc: [0, 1],
              note: 'imports, note the missing { Component } import'
            },
            { loc: [2, 3], note: 'component declared as a function' },
            { loc: [4, 5], note: 'still gets exported' }
          ]}
        />
        <Slide bgColor='background'>
          <Heading caps size={1}>Excuse me</Heading>
          <Appear>
            <Code textColor='alt'>{'const Function = props => <div />'}</Code>
          </Appear>
          <Appear>
            <Text caps textColor='secondary'>
              This is different and weird and<br />
              <S type='bold'>I don't like it</S>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor='background'>
          <ComponentPlayground
            code={buttonExample}
            previewBackgroundColor='background'
            theme='external'
            scope={{ styled }}
          />
        </Slide>
        <Slide bgColor='background'>
          <Heading caps size={2} textColor='primary'>State</Heading>
          <Appear>
            <Heading size={4} caps textColor='secondary'>
              state changes
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} caps textColor='primary'>
              props do not
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    )
  }
}
