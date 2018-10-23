import React, { Component } from 'react'
import { Slide, Heading } from 'spectacle'

class Intro extends Component {
  render () {
    return (
      <Slide
        transition={['zoom']}
        bgColor='primary'
        bgImage='images.jpg'
        bgDarken={0.8}
      >
        <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
          React and Redux
        </Heading>
      </Slide>
    )
  }
}

export default Intro
