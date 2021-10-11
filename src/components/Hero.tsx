import { Flex, Heading } from '@chakra-ui/react'

import React from 'react'

type HeroProps = {
  title: string
}

export const Hero = ({ title }: HeroProps): JSX.Element => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'React Next.js/TS/ChakraUI Template',
}
