import { Center, Flex, Heading } from '@chakra-ui/react'

import React from 'react'

const Hero = (): JSX.Element => {
  return <Center
    h="90vh"
  >
    <Flex direction="column">
      <Heading
        fontWeight="400"
        fontSize="3em"
      >your new</Heading>
      <Heading 
        fontFamily="Noto Serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="3em"
        ml="50px"
      >best friend</Heading>
      <Heading
        fontWeight="400"
        fontSize="3em"
        ml="100px"
      >is coming 👀</Heading>
    </Flex>
  </Center>
}

export default Hero