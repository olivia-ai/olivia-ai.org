import { Center, Flex, Heading, Image, chakra } from '@chakra-ui/react'

import React from 'react'

const HeadingText = (): JSX.Element => (
  <Flex 
    direction="column"
    w={{ base: '80vw', md: 'auto' }}
  >
    <Heading
      fontWeight="600"
      fontSize="3.5em"
    >your new</Heading>
    <Heading 
      fontWeight="600"
      fontSize="3.5em"
      ml="50px"
    >best <chakra.span
        bgGradient="linear(to-br, olivia.500, olivia.700)"
        bgClip="text"
      >friend</chakra.span>.</Heading>
  </Flex>
)

const Hero = (): JSX.Element => {
  return <Center
    h="92vh"
    pt="6vh"
  >
    <Flex 
      h={{ base: '60vh', md: '35vh' }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex 
        w="30vw"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          pos="absolute"
          src="messages.svg"
          pointerEvents="none"
          w="900px"
          display={{ base: 'none', md: 'block' }}
        />
        <HeadingText />
      </Flex>
      
      <Image 
        src="swiss-made.svg" 
        alt="Swiss made"
        w={{ base: '50vw', md: '25vw', lg: '10vw' }}
        pointerEvents="none"
      />
    </Flex>
  </Center>
}

export default Hero