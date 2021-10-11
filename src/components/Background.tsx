import { Image } from '@chakra-ui/react'
import React from 'react'

const Background = (): JSX.Element => {
  return <Image 
    src="background.svg"
    top={0}
    bottom={0}
    left={0}
    right={0}
    position="absolute"
    zIndex="-100"
    filter="blur(50px)"
    overflow="hidden"
  />
}

export default Background