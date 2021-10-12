import { Center, Flex, Heading, Image } from '@chakra-ui/react'

import React from 'react'

const HeadingText = (): JSX.Element => (
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
)

const Hero = (): JSX.Element => {
  return <Center
    h="90vh"
  >
    <Flex 
      h="35vh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <HeadingText />
      <Image 
        src="swiss-made.svg" 
        alt="Swiss made"
        w="10vw"
      />
    </Flex>
  </Center>
}

export default Hero