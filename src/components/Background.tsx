import { Flex } from '@chakra-ui/react'
import React from 'react'

const HomeBG = (): JSX.Element => (
  <Flex 
    pos="absolute"
    alignItems="center"
    height="100vh"
    width="100%"
    filter="blur(50px)"
    zIndex="-100"
  >
    <object 
      data="background.svg" 
      type="image/svg+xml" 
      style={{
        width: '100%',
        height: 'auto',
        top: 0,
        left: 0
      }}
    />
  </Flex>
)

const FooterBG = () => (
  <Flex
    pos="absolute"
    bottom={0}
    alignItems="flex-end"
    height="35vh"
    width="100%"
    filter="blur(40px)"
    zIndex="-100"
  >
    <object 
      data="background-footer.svg" 
      type="image/svg+xml" 
      style={{
        width: '100%',
        height: 'auto',
        top: 0,
        left: 0
      }}
    />
  </Flex>
)

const Background = (): JSX.Element => (
  <Flex 
    direction="column"
    width="100%"
    pointerEvents="none"
  >
    <HomeBG />
    <FooterBG />
  </Flex>
)

export default Background